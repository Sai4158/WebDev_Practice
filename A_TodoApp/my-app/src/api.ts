import { ITask } from "./types/tasks";

const baseUrl = "http://localhost:3002/task";

export const getAllTodos = async (): Promise<ITask[]> => {
  const res = await fetch(`${baseUrl}/Tasks`);
  const todos = await res.json();
  return todos;
};
