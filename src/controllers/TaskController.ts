import { Request, Response } from 'express';
import Task, { ITask } from '../models/Task';
 // create task function 
export const createTask = async (req: Request, res: Response): Promise<void> => {
  try {
    const { title, description } = req.body;

    if (!title || !description) {
      res.status(400).json({ error: 'Title and description are required' });
      return;
    }

    const taskData: ITask = new Task({
      title,
      description,
      status: 'pending',
    });

    const createdTask = await Task.create(taskData);
   
    res.status(201).json(createdTask);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create task' });
  }
};
// get list of tasks fucntion 
export const getTasks = async (req: Request, res: Response): Promise<void> => {
  try {
    const { limit = 10, offset = 0 } = req.query;

    const tasks = await Task.find()
      .limit(Number(limit))
      .skip(Number(offset))
      .select('-__v')
      .lean();

    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch tasks' });
  }
};
// get task by id function 
export const getTaskById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    const task = await Task.findById(id).select('-__v').lean();

    if (task) {
      res.json(task);
    } else {
      res.status(404).json({ error: 'Task not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch task' });
  }
};
// update task function 
export const updateTask = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { title, description, status } = req.body;

    const update: Partial<ITask> = {};

    if (title) {
      update.title = title;
    }
    if (description) {
      update.description = description;
    }
    if (status) {
      if (status === 'pending' || status === 'completed') {
        update.status = status;
      } else {
        res.status(400).json({ error: "Status should be 'pending' or 'completed'" });
        return;
      }
    }

    const updatedTask = await Task.findByIdAndUpdate(id, update, { new: true }).select('-__v').lean();

    if (updatedTask) {
      res.json(updatedTask);
    } else {
      res.status(404).json({ error: 'Task not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update task' });
  }
};
// delete task function 
export const deleteTask = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    const deletedTask = await Task.findByIdAndDelete(id);

    if (deletedTask) {
      res.sendStatus(204);
    } else {
      res.status(404).json({ error: 'Task not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete task' });
  }
};
