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
exports.handlerSignUp = void 0;
const bcrypt_1 = require("bcrypt");
const uuid_1 = require("uuid");
const jsonwebtoken_1 = require("jsonwebtoken");
const prisma_1 = __importDefault(require("../../../lib/prisma"));
const config_1 = require("../../../config");
const { HTTP: { STATUS_CODE } } = config_1.config;
const handlerSignUp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, lastname, username, email, password } = req.body;
    if (!username || !email || !password)
        return res.status(config_1.config.HTTP.STATUS_CODE.FIELDS_REQUIRED)
            .json({ data: null, error: 'FIELDS_REQUIRED' });
    const id = (0, uuid_1.v4)();
    const refreshToken = (0, uuid_1.v4)();
    const emailHashed = yield (0, bcrypt_1.hash)(email, 10);
    const passwordHashed = yield (0, bcrypt_1.hash)(password, 10);
    const token = (0, jsonwebtoken_1.sign)(id, config_1.config.JWT.SECRET);
    const userCreated = yield prisma_1.default.user.create({
        data: {
            id,
            name: name || '',
            lastname: lastname || '',
            username,
            emailHashed,
            passwordHashed
        }
    });
    console.log({ userCreated });
    if (!userCreated) {
        return res.status(STATUS_CODE.CONFLICT_TO_CREATE_USER)
            .json({ data: null, error: 'CONFLICT_TO_CREATE_USER' });
    }
    else {
        const userNormalize = {
            id: userCreated.id,
            name: userCreated.name || '',
            lastname: userCreated.lastname || '',
            username: userCreated.username,
        };
        return res.status(200).json({
            data: {
                userInfo: userNormalize,
                accessToken: token,
                refreshToken
            },
            error: null
        });
    }
});
exports.handlerSignUp = handlerSignUp;
//# sourceMappingURL=controllers.js.map