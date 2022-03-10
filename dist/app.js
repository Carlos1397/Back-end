"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const config_1 = __importDefault(require("./config"));
const UserGit_routes_1 = __importDefault(require("./routes/UserGit.routes"));
const app = (0, express_1.default)();
app.set('port', config_1.default.PORT_SERVER);
app.use((0, morgan_1.default)('dev')); // información de peticiones rutas
app.use((0, cors_1.default)()); // conectarme a los servidores o peticiones
app.use(express_1.default.json()); // objetos JSON...peticiones POST 
app.use(express_1.default.urlencoded({ extended: false }));
app.use(UserGit_routes_1.default); //usando routes
exports.default = app;
