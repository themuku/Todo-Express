import { Response, Request } from "express";
import { prisma } from "../server";

export const getAllTodos = async (req: Request, res: Response) => {
  try {
    const todos = await prisma.todo.findMany();
    return res.json(todos);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const addTodo = async (req: Request, res: Response) => {
  try {
    const { title } = req.body;

    const newTodo: { title: string } = {
      title,
    };

    const createdTodo = await prisma.todo.create({ data: newTodo });

    return res.json(createdTodo);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const getTodo = async (req: Request, res: Response) => {
  try {
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateTodo = async (req: Request, res: Response) => {
  try {
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteTodo = async (req: Request, res: Response) => {
  try {
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};
