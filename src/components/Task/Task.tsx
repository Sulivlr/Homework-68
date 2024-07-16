import React from 'react';
import {useAppDispatch} from '../../app/hooks';
import {editTask, fetchTasks, removeTask} from '../../store/todoThunks';
import ButtonSpinner from '../ButtonSpinner/ButtonSpinner';

interface Props {
  title: string;
  done: boolean;
  id: string;
  isLoading: boolean;
}
const Task: React.FC<Props> = React.memo(({title, done, id, isLoading}) => {
  const dispatch = useAppDispatch();
  const onRemove = async () => {
    if (window.confirm('sure to delete?')) {
      await dispatch(removeTask(id));
      await dispatch(fetchTasks());
    }
  };

  const onCheckBoxChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
   const done = event.target.checked;
   await dispatch(editTask({taskId: id, apiTask: {title, done}}));
   await dispatch(fetchTasks());
  };

  return (
    <div className="input-group">
      <div className="input-group-text">
        <input className="form-check-input mt-0" type="checkbox" defaultChecked={done} disabled={isLoading} onChange={onCheckBoxChange}/>
      </div>
      <input type="text" className="form-control" readOnly defaultValue={title}/>
      <button className="btn btn-outline-danger" onClick={onRemove} disabled={isLoading}>
        {isLoading && <ButtonSpinner />}
        Delete</button>
    </div>
  );
});

export default Task;