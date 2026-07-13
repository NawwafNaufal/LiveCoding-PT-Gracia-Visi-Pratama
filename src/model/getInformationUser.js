import { User } from "./User.js";

export const getDataInformation = async () => {
    const users = await User.findAll({
        attributes: ["email", "name", "age"]
    });

    return users.map(user => user.get({ plain: true }));
};