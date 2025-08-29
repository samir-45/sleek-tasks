import React, { useState } from 'react';
import AddTodo from './AddTodo';

const AddTodoButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="my-4 flex justify-between items-center">
      <h2 className='text-2xl font-bold'>Tasks</h2>
      <div>
        <button
          className="btn btn-primary"
          onClick={() => setOpen(true)}
        >
          + Add Task
        </button>
      </div>

      {open && <AddTodo onClose={() => setOpen(false)} />}
    </div>
  );
};

export default AddTodoButton;