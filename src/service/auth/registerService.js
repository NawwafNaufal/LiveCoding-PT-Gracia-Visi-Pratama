import registerModel from "../../model/register.js";
import bcrypt from "bcrypt";

const regisService = async (username, email, name, dateBirth, password, age) => {

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const dataUsers = await registerModel(username, email, name, dateBirth, hashedPassword, age);

    return dataUsers;
};

export default regisService;