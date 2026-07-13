import express from "express"
import cookieParser from "cookie-parser"
import validateToken from "./middleware/validateJwt.js"
import  errorHandling  from "./middleware/errorHandling.js"
import "dotenv/config"

import register from "./routes/auth.js"
import login from "./routes/auth.js"
import dataStaff from "./routes/auth.js"
import dataUsers from "./routes/dataUsers.js"
import vibonaci from "./routes/dataUsers.js"
import documentRoutes from "./routes/document.js"
import path from "path"

const app = express()
app.use(express.json())
app.use(cookieParser())


app.use("/auth",register)
app.use("/auth",login)
app.use("/",dataStaff)
app.use("/",dataUsers)
app.use("/",vibonaci)
app.use("/documents", documentRoutes)
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")))


app.get("/Home", validateToken,(req,res) => {
    res.status(200).json({
        message : "HElLO WORLD"
    })
})

const PORT = process.env.PORT

app.use(errorHandling)

app.listen(PORT,() => {
    console.log('Server Connect In port : ', PORT)
})