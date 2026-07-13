import regisService from "../../service/auth/registerService.js";

const regisController = async (req,res,next) => {
    const {username,email,name,dateBirth,password,age} = req.body

    try {
        const result = await regisService(username,email,name,dateBirth,password,age)
    
        res.status(200).json({
            message : "Registrasi Berhasil",
            data : result
        })
    } catch (error) {
        return res.status(400).json({
            message : error.message
        })
    }
}

export default regisController