import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("test", "root", "aegon", {
    host: "localhost",
    dialect: "mysql",
    logging: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

sequelize.authenticate()
    .then(() => console.log("Database connected successfully via Sequelize"))
    .catch(err => console.error("Database connection failure via Sequelize:", err));

// Import semua model biar Sequelize tau tabel apa aja yang mau di-sync
import "../model/User.js";

sequelize.sync({ alter: true })
    .then(() => console.log("All models synced successfully"))
    .catch(err => console.error("Sync error:", err));

export default sequelize;