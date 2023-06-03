import Task, { ITask } from '../models/Task';

export const createTask = async (taskData: ITask): Promise<ITask> => {
  const task = new Task(taskData);
  return await task.save();
};

export const getTasks = async (): Promise<ITask[]> => {
  return await Task.find({});
};

export const getTaskById = async (taskId: string): Promise<ITask | null> => {
  return await Task.findById(taskId);
};

export const updateTask = async (
  taskId: string,
  taskData: Partial<ITask>
): Promise<ITask | null> => {
  return await Task.findByIdAndUpdate(taskId, taskData, { new: true });
};

export const deleteTask = async (taskId: string): Promise<void> => {
  await Task.findByIdAndDelete(taskId);
};
