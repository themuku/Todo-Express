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
exports.deleteTodo = exports.updateTodo = exports.getTodo = exports.addTodo = exports.getAllTodos = void 0;
const server_1 = require("../server");
const getAllTodos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todos = yield server_1.prisma.todo.findMany();
        return res.json(todos);
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
});
exports.getAllTodos = getAllTodos;
const addTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newTodo = req.body;
        const createdTodo = yield server_1.prisma.todo.create(newTodo);
        return res.json(createdTodo);
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
});
exports.addTodo = addTodo;
const getTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
});
exports.getTodo = getTodo;
const updateTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
});
exports.updateTodo = updateTodo;
const deleteTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
});
exports.deleteTodo = deleteTodo;
