import { DataTypes } from "sequelize";
import { sequelize } from "../config/connection.js";

export const User = sequelize.define("User", {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    date_birth: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: "datausers",
    timestamps: false 
});

export const Document = sequelize.define("Document", {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    file_path: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: "documents",
    underscored: true,
    timestamps: true
});