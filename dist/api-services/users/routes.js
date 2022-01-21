"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRoutes = void 0;
const express_1 = require("express");
const controllers_1 = require("./controllers");
const router = (0, express_1.Router)();
exports.UsersRoutes = router;
router.get('/users', controllers_1.getUsers);
//# sourceMappingURL=routes.js.map