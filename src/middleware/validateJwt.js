import jwt from "jsonwebtoken"
import "dotenv/config"

const validateToken = (req,res,next) => {
    const getToken = req.headers ['authorization']
    const token = getToken && getToken.split(" ")[1]
    // const getToken = req.cookies.authToken

    jwt.verify(token,process.env.JWT_KEY,(err,decode) => {
         if(err) {
            return res.status(400).json({
                message : "Token Tidak Valid"
            })
         }
        req.result = decode
        next()
    }) 
}

export default validateToken