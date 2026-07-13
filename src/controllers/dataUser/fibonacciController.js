import { getFibonacciSequence } from "../../service/dataUser/fibonacciService.js";

const fibonnaciController = (req,res,nex) => {
    const result = getFibonacciSequence()
    res.status(200).json({
        data : result
    })
}

export default fibonnaciController