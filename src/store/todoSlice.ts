import {Task} from '../types';
import {createSlice} from '@reduxjs/toolkit';
import {createTask, fetchTasks, removeTask} from './todoThunks';

interface TodoState {
  tasks: Task[];
  fetchLoading: boolean;
  createLoading: boolean;
  changingId: null | string;
}

const initialState: TodoState = {
  tasks: [],
  fetchLoading: false,
  createLoading: false,
  changingId: null,
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createTask.pending, (state) => {
      state.createLoading = true;
    }).addCase(createTask.fulfilled, (state) => {
      state.createLoading = false;
    }).addCase(createTask.rejected, (state) => {
      state.createLoading = false;
    });

    builder.addCase(fetchTasks.pending, (state) => {
      state.fetchLoading = true;
    }).addCase(fetchTasks.fulfilled, (state, {payload: tasks}) => {
      state.tasks = tasks;
      state.fetchLoading = false;
    }).addCase(fetchTasks.rejected, (state) => {
      state.fetchLoading = false;
    });

    builder.addCase(removeTask.pending, (state, {meta: {arg: taskId}}) => {
      state.changingId = taskId;
    }).addCase(removeTask.fulfilled, (state) => {
      state.changingId = null;
    }).addCase(removeTask.rejected, (state) => {
      state.changingId = null;
    });

  },
});

export const todoReducer = todoSlice.reducer;