import dataStaffService from "../../service/dataUser/staffRanked.js";

const staffRankedController = (req,res) => {

    const result = dataStaffService()
    res.status(200).json({
        message : "Sales Staff Ranked",
        data : [
            {
                topTwo : result.topTwo,
                lowest : result.lowest
            }
        ]
    })
}

export  default staffRankedController