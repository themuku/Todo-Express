import { Response, Request } from "express";
import { prisma } from "../server";

export const getAllTodos = async (req: Request, res: Response) => {
  try {
    const todos = await prisma.todo.findMany();

    if (todos.length === 0)
      return res.status(404).json({ message: "Todos not found" });

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

    const createdTodo = await prisma.todo.create({
      data: newTodo,
    });

    return res.json(createdTodo);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const getTodo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!id) return res.status(403).json({ message: "Id is required" });

    const todo = await prisma.todo.findUnique({
      where: {
        id,
      },
    });

    if (!todo) return res.status(404).json({ message: "Todo is not found" });

    return res.json(todo);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateTodo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title, completed } = req.body;

    if (!id) return res.status(403).json({ message: "Id is required" });

    const todo: { title?: string; completed?: boolean } = {
      title,
      completed,
    };

    if (title) {
      const updatedTodo = await prisma.todo.update({
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
      const updatedTodo = await prisma.todo.update({
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
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteTodo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!id) return res.status(403).json({ message: "Id is required" });

    const todo = await prisma.todo.delete({
      where: {
        id,
      },
    });

    if (!todo) return res.status(404).json({ message: "Todo is not found" });

    return res.json(todo);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};
