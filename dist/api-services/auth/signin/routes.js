"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignInRoutes = void 0;
const express_1 = require("express");
const controllers_1 = require("./controllers");
const router = (0, express_1.Router)();
exports.SignInRoutes = router;
router.post('/signin', controllers_1.handlerSignIn);
//# sourceMappingURL=routes.js.map