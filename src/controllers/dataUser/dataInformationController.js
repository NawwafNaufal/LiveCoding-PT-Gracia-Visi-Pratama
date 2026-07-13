import { dataInfromationService } from "../../service/dataUser/dataInformationService.js";

export const dataInformationController = async (req,res) => {
    const result = await dataInfromationService()

        res.status(200).json({
            message : "Data User",
            data : result
        })
}