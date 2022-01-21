"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RefreshTokenRoutes = void 0;
const express_1 = require("express");
const controllers_1 = require("./controllers");
const router = (0, express_1.Router)();
exports.RefreshTokenRoutes = router;
router.post('/refreshToken', controllers_1.createRefreshToken);
router.post('/token', controllers_1.createToken);
//# sourceMappingURL=routes.js.map