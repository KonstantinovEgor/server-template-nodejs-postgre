class ApiError extends Error {
    constructor(status, description, stack, type) {
        super();
        this.status = status;
        this.description = description;
        this.stack = stack;
        this.type = type;
    }

    static badRequest(description, stack) {
        return new ApiError(404, description, stack, 'Bad Request');
    }
    
    static internal(description, stack) {
        return new ApiError(500, description, stack, 'Internal Server Error');
    }
    
    static forbidden(description, stack) {
        return new ApiError(403, description, stack, 'Forbidden');
    }
    
    static toolService(description, stack) {
        return new ApiError(400, description, stack, 'Bad Request');
    }
    
    static dbError(description, stack) {
        return new ApiError(400, description, stack, 'Bad Request');
    }

    static dbConflict(description, stack) {
        return new ApiError(409, description, stack, 'Conflict');
    }
}

mosule.exports = ApiError;