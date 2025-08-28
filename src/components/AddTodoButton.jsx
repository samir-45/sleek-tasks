import React, { useState } from 'react';
import AddTodo from './AddTodo';

const AddTodoButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="my-4">
      <button
        className="btn btn-primary w-full"
        onClick={() => setOpen(true)}
      >
        + Add Task
      </button>

      {open && <AddTodo onClose={() => setOpen(false)} />}
    </div>
  );
};

export default AddTodoButton;