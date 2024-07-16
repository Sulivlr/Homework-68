import {Task} from '../types';
import {createSlice} from '@reduxjs/toolkit';

interface TodoState {
  tasks: Task[];
  fetchLoading: boolean;
  changingId: null | string;
}

const initialState: TodoState = {
  tasks: [],
  fetchLoading: false,
  changingId: null,
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {},
});

export const todoReducer = todoSlice.reducer;