"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var pg_1 = require("pg");
var dot = require("dotenv");
dot.config();
var client = new pg_1.Client({
    host: process.env.HOST,
    user: process.env.USER,
    port: parseInt((_a = process.env.PORT) !== null && _a !== void 0 ? _a : '5432'),
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});
client.connect();
exports.default = client;
