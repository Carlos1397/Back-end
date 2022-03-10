"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userGitSchema = new mongoose_1.Schema({
    userName: {
        type: 'string',
        required: true,
        trim: true
    },
    userEmail: {
        type: 'string',
        required: true,
        unique: true,
        trim: true
    },
    condiciones: {
        type: Boolean,
        default: false
    }
}, {
    versionKey: false,
    timestamps: true
});
exports.default = (0, mongoose_1.model)('UserGit', userGitSchema);
