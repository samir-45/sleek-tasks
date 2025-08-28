import React, { useState } from 'react';
import { useTodos } from '../context/TodoProvider';
import EditTodo from './EditTodo';

const TodoItem = ({ todo }) => {

    const { dispatch } = useTodos();
    const [open, setOpen] = useState(false);

    return (
        <div className="p-3 border rounded flex flex-col gap-1">
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
                            className="text-blue-500 font-semibold"
                        >
                            Edit
                        </button>
                    )}

                    <button
                        onClick={() => dispatch({ type: "DELETE_TODO", payload: todo.id })}
                        className="text-red-500 font-bold"
                    >
                        X
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