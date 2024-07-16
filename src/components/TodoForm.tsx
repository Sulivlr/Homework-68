import React, {useState} from 'react';
const TodoForm = () => {
  const [taskTitle, setTaskTitle] = useState('');

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(taskTitle);
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
        <button type="submit" className="btn btn-primary">Create</button>
    </form>
  );
};

export default TodoForm;