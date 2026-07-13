import { responseError } from "../error/responseError.js";

const errorHandling = (err, req, res, next) => {
    if (!err) {
        next();
        return;
    }

    if (err instanceof responseError) {
        console.log(err.message, err.stack);
        return res.status(err.status).json({
            errors: err.message
        });
    }

    if (err.isJoi) {
        console.log(err.message, err.stack);
        return res.status(400).json({
            errors: err.details.map(d => d.message)
        });
    }

    console.log(err.message, err.stack);
    return res.status(500).json({
        message: "Server internal error"
    });
};

export default errorHandling;