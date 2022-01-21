"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const config_1 = require("./config");
const routes_1 = require("./routes");
const server = (0, express_1.default)();
server.set('PORT', process.env.PORT || config_1.config.PORT);
server.use(express_1.default.urlencoded({ extended: false }));
server.use(express_1.default.json());
server.use((0, morgan_1.default)('dev'));
server.use((0, cors_1.default)());
server.use('/api', routes_1.SignInRoutes);
server.use('/api', routes_1.SignUpRoutes);
server.use('/api', routes_1.RefreshTokenRoutes);
server.use('/api', routes_1.UsersRoutes);
server.use(routes_1.NotFound);
server.use(routes_1.HandleErrors);
exports.default = server;
//# sourceMappingURL=server.js.map