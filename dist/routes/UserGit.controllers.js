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
exports.updateUser = exports.deleteUser = exports.getUser = exports.getUsers = exports.createUser = void 0;
const UserGit_1 = __importDefault(require("./UserGit"));
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userFound = yield UserGit_1.default.findOne({ userEmail: req.body.userEmail });
    if (userFound)
        return res.status(301).json({ message: "el email ya existe!" });
    const usuariogit = new UserGit_1.default(req.body);
    console.log(usuariogit);
    const saveUser = yield usuariogit.save();
    res.json(saveUser);
});
exports.createUser = createUser;
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const usuariosGit = yield UserGit_1.default.find();
        return res.json(usuariosGit);
    }
    catch (e) {
        res.json(e);
    }
});
exports.getUsers = getUsers;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userFound = yield UserGit_1.default.findById(req.params.id);
    if (!userFound)
        return res.status(204).json();
    return res.json(userFound);
});
exports.getUser = getUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userFound = yield UserGit_1.default.findByIdAndDelete(req.params.id);
    if (!userFound)
        return res.status(204).json();
    return res.json(userFound);
});
exports.deleteUser = deleteUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userUpdate = yield UserGit_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!userUpdate)
        return res.status(204).json();
    res.json(userUpdate);
});
exports.updateUser = updateUser;
