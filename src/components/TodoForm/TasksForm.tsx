import React, {useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import ButtonSpinner from '../ButtonSpinner/ButtonSpinner';
import {ApiTask} from '../../types';
import {createTask, fetchTasks} from '../../store/todoThunks';
const TasksForm = () => {
  const dispatch = useAppDispatch();
  const createLoading = useAppSelector(state => state.todo.createLoading);
  const [taskTitle, setTaskTitle] = useState('');

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const task: ApiTask = {
      title: taskTitle,
      done: false,
    };
    await dispatch(createTask(task));
    setTaskTitle('');
    await dispatch(fetchTasks());
  };

  const onTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => setTaskTitle(event.target.value);

  return (
    <form className="input-group" onSubmit={onSubmit}>
        <input
          type="text"
          className="form-control"
          value={taskTitle}
          onChange={onTitleChange}
        />
        <button
          type="submit"
          className="btn btn-primary"
          disabled={createLoading}
        >
          {createLoading && <ButtonSpinner />}
          Create
        </button>
    </form>
  );
};

export default TasksForm;