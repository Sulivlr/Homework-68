import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {fetchTasks} from '../../store/todoThunks';
import Spinner from '../Spinner/Spinner';

const Tasks = () => {
  const dispatch = useAppDispatch();
  const tasks = useAppSelector(state => state.todo.tasks);
  const fetchLoading = useAppSelector(state => state.todo.fetchLoading);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return fetchLoading ? <Spinner /> : (
    <div className="d-flex flex-column gap-2">
      {tasks.map((task) => (
        <div className="input-group">
          <div className="input-group-text">
            <input className="form-check-input mt-0" type="checkbox" defaultChecked={task.done}/>
          </div>
          <input type="text" className="form-control" readOnly defaultValue={task.title}/>
          <button className="btn btn-outline-danger">Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Tasks;