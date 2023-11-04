import { Request, Response, Errback } from "express";

export const getAllTodos = async (req: Request, res: Response) => {
  try {
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};
