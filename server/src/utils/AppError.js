class AppError extends Error {
    constructor(message, statusCode){
        super(message);
        this.statusCode = statusCode;
        this.isOperational = Math.floor(statusCode / 100) === 4;
        Error.captureStackTrace(this, this.constructor);
    }
}

export default AppError;