import TasksForm from './components/TodoForm/TasksForm';
import Tasks from './components/Todos/Tasks';

const App = () => {
  return (
    <>
      <div className="container mt-2">
        <TasksForm />
        <hr/>
        <Tasks />
      </div>
    </>
  );
};

export default App;
