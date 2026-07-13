import express from "express"
import regisController from "../controllers/auth/regisController.js"
import loginController from "../controllers/auth/loginContrroller.js"
import staffRankedController from "../controllers/dataUser/staffRankedControll.js"
import { validateLogIn } from "../middleware/validation/loginValidation.js"
import { validateRegistrasi } from "../middleware/validation/regisValidation.js"

const route = express.Router()

route.post('/register', validateRegistrasi, regisController)
route.post('/login', validateLogIn, loginController)
route.get("/data-staff",staffRankedController)

export default route