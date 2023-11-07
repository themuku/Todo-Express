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
        if (todos.length === 0)
            return res.status(404).json({ message: "Todos not found" });
        return res.json(todos);
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
});
exports.getAllTodos = getAllTodos;
const addTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title } = req.body;
        const newTodo = {
            title,
        };
        const createdTodo = yield server_1.prisma.todo.create({
            data: newTodo,
        });
        return res.json(createdTodo);
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
});
exports.addTodo = addTodo;
const getTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        if (!id)
            return res.status(403).json({ message: "Id is required" });
        const todo = yield server_1.prisma.todo.findUnique({
            where: {
                id,
            },
        });
        if (!todo)
            return res.status(404).json({ message: "Todo is not found" });
        return res.json(todo);
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
});
exports.getTodo = getTodo;
const updateTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { title, completed } = req.body;
        if (!id)
            return res.status(403).json({ message: "Id is required" });
        const todo = {
            title,
            completed,
        };
        if (title) {
            const updatedTodo = yield server_1.prisma.todo.update({
                where: {
                    id,
                },
                data: todo,
            });
            if (!updatedTodo) {
                return res.status(404).json({ message: "Todo is not found" });
            }
        }
        if (completed) {
            const updatedTodo = yield server_1.prisma.todo.update({
                where: {
                    id,
                },
                data: todo,
            });
            if (!updatedTodo) {
                return res.status(404).json({ message: "Todo is not found" });
            }
        }
        return res.json({ message: `Todo: ${id} updated successfully` });
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
});
exports.updateTodo = updateTodo;
const deleteTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        if (!id)
            return res.status(403).json({ message: "Id is required" });
        const todo = yield server_1.prisma.todo.delete({
            where: {
                id,
            },
        });
        if (!todo)
            return res.status(404).json({ message: "Todo is not found" });
        return res.json(todo);
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
});
exports.deleteTodo = deleteTodo;
