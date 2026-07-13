import express from "express"
import { dataInformationController } from "../controllers/dataUser/dataInformationController.js"
import fibonnaciController from "../controllers/dataUser/fibonacciController.js"
const route = express.Router()

route.get("/data-users",dataInformationController)
route.get("/fibonacci",fibonnaciController)


export default route