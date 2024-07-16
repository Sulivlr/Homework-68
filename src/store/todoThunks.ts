import {createAsyncThunk} from '@reduxjs/toolkit';
import {ApiTask, ApiTasks, Task} from '../types';
import axiosApi from '../axiosApi';

export const createTask = createAsyncThunk<void, ApiTask>(
  'todo/createTask',
  async (apiTaskData) => {
    await axiosApi.post('/tasks.json', apiTaskData);
  },
);

export const fetchTasks = createAsyncThunk<Task[]>(
  'todo/fetchTasks',
  async () => {
    const {data: apiTasks} = await axiosApi.get<ApiTasks | null>('/tasks.json');
    if (!apiTasks) {
      return [];
    }
      return Object.keys(apiTasks).map((id) => ({
        id,
        ...apiTasks[id]
      }));
  },
);