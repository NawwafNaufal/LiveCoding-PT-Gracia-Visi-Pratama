import { registerSchema } from "../../validation/authValidation.js"

export const validateRegistrasi = (req,res,next) => {
    const {error,value} = registerSchema.validate(req.body)

    if(error){
        return next(error)
    }

    req.body = value
    return next()
}