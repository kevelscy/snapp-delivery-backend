"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handlerSignIn = void 0;
const bcrypt_1 = require("bcrypt");
const jsonwebtoken_1 = require("jsonwebtoken");
const prisma_1 = __importDefault(require("../../../lib/prisma"));
const config_1 = require("../../../config");
const { HTTP: { STATUS_CODE } } = config_1.config;
const handlerSignIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    if (!username || !password)
        return res.status(config_1.config.HTTP.STATUS_CODE.FIELDS_REQUIRED)
            .json({ data: null, error: 'FIELDS_REQUIRED' });
    const userFounded = yield prisma_1.default.user.findFirst({
        where: { username }
    });
    if (!userFounded)
        return res.status(config_1.config.HTTP.STATUS_CODE.INCORRECT_CREDENTIALS)
            .json({ data: null, error: 'INCORRECT_CREDENTIALS' });
    const isVerified = (0, bcrypt_1.compare)(userFounded.passwordHashed, password);
    if (!isVerified) {
        return res.status(STATUS_CODE.INCORRECT_CREDENTIALS)
            .json({ data: null, error: 'INCORRECT_CREDENTIALS' });
    }
    else {
        const token = (0, jsonwebtoken_1.sign)(userFounded.id, config_1.config.JWT.SECRET, { expiresIn: 60 });
        const userNormalize = {
            id: userFounded.id,
            name: userFounded.name || '',
            lastname: userFounded.lastname || '',
            username: userFounded.username,
        };
        return res.status(200).json({
            data: {
                userInfo: userNormalize,
                accessToken: token
            },
            error: null
        });
    }
});
exports.handlerSignIn = handlerSignIn;
//# sourceMappingURL=controllers.js.map