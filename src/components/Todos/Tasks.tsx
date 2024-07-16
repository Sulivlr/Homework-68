import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {fetchTasks} from '../../store/todoThunks';
import Spinner from '../Spinner/Spinner';
import Task from '../Task/Task';

const Tasks = () => {
  const dispatch = useAppDispatch();
  const tasks = useAppSelector(state => state.todo.tasks);
  const fetchLoading = useAppSelector(state => state.todo.fetchLoading);
  const mutatingId = useAppSelector(state => state.todo.changingId);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return fetchLoading ? <Spinner /> : (
    <div className="d-flex flex-column gap-2">
      {tasks.map((task) => (
        <Task key={task.id} title={task.title} done={task.done} id={task.id} isLoading={task.id === mutatingId}/>
      ))}
    </div>
  );
};

export default Tasks;