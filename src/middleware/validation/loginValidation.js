import { loginSchema } from "../../validation/authValidation.js"

export const validateLogIn = (req,res,next) => {
    const {error,value} = loginSchema.validate(req.body)

    if(error){
        return next(error)
    }

    req.body = value
    return next()
}