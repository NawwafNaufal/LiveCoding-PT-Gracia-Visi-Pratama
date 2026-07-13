import { User } from "./User.js";

const registerModel = async (username, email, name, dateBirth, password, age) => {
    const newUser = await User.create({
        username,
        email,
        password,
        name,
        date_birth: dateBirth,
        age
    });
    return newUser;
};

export default registerModel;