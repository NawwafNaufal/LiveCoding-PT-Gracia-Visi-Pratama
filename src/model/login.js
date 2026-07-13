import { Op } from "sequelize";
import { User } from "./User.js";

const loginModel = async (identifier) => {
    const users = await User.findAll({
        where: {
            [Op.or]: [
                { username: identifier },
                { email: identifier }
            ]
        }
    });

    return users.map(user => user.get({ plain: true }));
};

export default loginModel;