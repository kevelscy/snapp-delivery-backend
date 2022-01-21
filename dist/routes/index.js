"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HandleErrors = exports.NotFound = exports.UsersRoutes = exports.RefreshTokenRoutes = exports.SignInRoutes = exports.SignUpRoutes = void 0;
const routes_1 = require("../api-services/auth/signin/routes");
Object.defineProperty(exports, "SignInRoutes", { enumerable: true, get: function () { return routes_1.SignInRoutes; } });
const routes_2 = require("../api-services/auth/signup/routes");
Object.defineProperty(exports, "SignUpRoutes", { enumerable: true, get: function () { return routes_2.SignUpRoutes; } });
const routes_3 = require("../api-services/auth/refreshToken/routes");
Object.defineProperty(exports, "RefreshTokenRoutes", { enumerable: true, get: function () { return routes_3.RefreshTokenRoutes; } });
const routes_4 = require("../api-services/users/routes");
Object.defineProperty(exports, "UsersRoutes", { enumerable: true, get: function () { return routes_4.UsersRoutes; } });
const NotFound = (req, res) => {
    return res.status(404).send({
        message: 'Root not found please go to /api route'
    });
};
exports.NotFound = NotFound;
const HandleErrors = (req, res) => {
    return res.status(500).send({
        message: 'Error Server'
    });
};
exports.HandleErrors = HandleErrors;
//# sourceMappingURL=index.js.map