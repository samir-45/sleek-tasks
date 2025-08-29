import React, { useState } from 'react';
import { useTodos } from '../context/TodoProvider';
import EditTodo from './EditTodo';

const TodoItem = ({ todo }) => {

    const { dispatch } = useTodos();
    const [open, setOpen] = useState(false);

    return (
        <div className="p-4 shadow-md rounded-lg flex flex-col gap-1">
            <div className="flex justify-between items-center">

                <div
                    onClick={() => dispatch({ type: "TOGGLE_TODO", payload: todo.id })}
                    className={`cursor-pointer font-semibold ${todo.completed ? "line-through text-gray-400" : ""
                        }`}
                >
                    {todo.title}
                </div>

                <div className="flex gap-2">
                    {!todo.completed && (
                        <button
                            onClick={() => setOpen(true)}
                            className="cursor-pointer text-sm px-3 py-1 border border-slate-200 rounded-lg"
                        >
                            Edit
                        </button>
                    )}

                    <button
                        onClick={() => dispatch({ type: "DELETE_TODO", payload: todo.id })}
                        className="cursor-pointer text-sm px-3 py-1 border border-red-100 text-red-600 rounded-lg"
                    >
                        Delete
                    </button>

                </div>



            </div>
            {todo.description && <p className="text-sm text-gray-600">{todo.description}</p>}
            {todo.date && (
                <span className="text-xs text-gray-400">Due: {todo.date}</span>
            )}

            {open && <EditTodo todo={todo} onClose={() => setOpen(false)} />}

        </div>
    );
};

export default TodoItem;