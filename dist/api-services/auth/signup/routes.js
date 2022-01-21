"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignUpRoutes = void 0;
const express_1 = require("express");
const controllers_1 = require("./controllers");
const router = (0, express_1.Router)();
exports.SignUpRoutes = router;
router.post('/signup', controllers_1.handlerSignUp);
//# sourceMappingURL=routes.js.map