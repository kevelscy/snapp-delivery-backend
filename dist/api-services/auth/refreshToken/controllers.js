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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createToken = exports.createRefreshToken = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const uuid_1 = require("uuid");
const config_1 = require("../../../config");
const createRefreshToken = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const refreshToken = (0, uuid_1.v4)();
    return res.status(200).json({
        data: refreshToken
    });
});
exports.createRefreshToken = createRefreshToken;
const createToken = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    if (!id)
        return res.status(config_1.config.HTTP.STATUS_CODE.FIELDS_REQUIRED)
            .json({ data: null, error: 'ID_FIELD_REQUIRED' });
    const token = (0, jsonwebtoken_1.sign)(id, config_1.config.JWT.SECRET, { expiresIn: 60 });
    return res.status(200).json({
        data: token,
        error: null
    });
});
exports.createToken = createToken;
//# sourceMappingURL=controllers.js.map