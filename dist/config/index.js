"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    PORT: 4000,
    JWT: {
        SECRET: process.env.JWT_SECRET
    },
    HTTP: {
        STATUS_CODE: {
            SUCCESSFUL: 200,
            METHOD_NOT_ALLOWED: 405,
            INCORRECT_CREDENTIALS: 401,
            USER_NOT_FOUND: 404,
            FIELDS_REQUIRED: 400,
            CONFLICT_TO_CREATE_USER: 409,
        }
    },
};
//# sourceMappingURL=index.js.map