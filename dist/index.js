"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const routes_1 = require("./routes");
const router = express_1.default.Router();
const server = (0, express_1.default)();
dotenv_1.default.config();
const RootRouter = router.get('/', (req, res) => {
    return res.status(200).json({
        data: 'epale',
        error: null
    });
});
server.use('/api', routes_1.SignInRoutes);
server.use('/api', routes_1.SignUpRoutes);
server.use('/api', routes_1.RefreshTokenRoutes);
server.use('/api', routes_1.UsersRoutes);
server.use(RootRouter);
server.use(routes_1.NotFound);
server.use(routes_1.HandleErrors);
server.listen(process.env.PORT || 4000, () => {
    console.log('Listeting in the port' + process.env.PORT || 4000);
});
//# sourceMappingURL=index.js.map