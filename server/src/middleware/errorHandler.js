import logger from "../utils/logger.js";

function errorHandler(err, req, res, next){
    logger.error(`Error Code: ${err.statusCode}; Error Message: ${err.message}`);
    let status = Math.floor(err.statusCode / 100) === 4 ? 'fail' : 'error';
    if(err.isOperational){
        res.status(err.statusCode).json({
            status: status,
            message: err.message
        })
    } else {
        res.status(500).json({
            status: status,
            message: "Internal Server Error"
        })
    }
}

export default errorHandler;