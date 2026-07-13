import loginModel from "../../model/login.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { responseError } from "../../error/responseError.js";
import "dotenv/config";

const loginService = async (username, email, password) => {
    const data = username || email;

    const loginUser = await loginModel(data);

    if (!loginUser || loginUser.length === 0) {
        throw new responseError(400,"Username atau Email salah / tidak terdaftar");
    }

    const datas = loginUser[0];

    const isPasswordValid = await bcrypt.compare(password, datas.password);

    if (!isPasswordValid) {
        throw new responseError(400,"Password salah");
    }

    const payload = {
        username: datas.username,
        email: datas.email,
        name: datas.name
    };

    const expiresIn = 60 * 60 * 1;

    const token = jwt.sign(payload, process.env.JWT_KEY, { expiresIn });

    return { token };
};

export default loginService;