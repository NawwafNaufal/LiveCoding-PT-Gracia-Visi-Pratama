import loginService from "../../service/auth/loginService.js";

const loginController = async (req,res,next) => {
    const {username,email,password} = req.body

    try {
        const result = await loginService(username,email,password)
        
        // res.cookie('authToken',result.token,{
        //         httpOnly : true,
        //         maxAge : 360000
        // })

        return res.status(200).json({
            message : "Login Success",
            token : result.token
        })
    } catch (error) {
        return res.status(400).json({
            message : error.message
        })
    }
}

export default loginController