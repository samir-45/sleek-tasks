import React, { useState } from 'react';
import { useTodos } from '../context/TodoProvider';

const EditTodo = ({ todo, onClose }) => {

    const { dispatch } = useTodos();
    const [title, setTitle] = useState(todo.title);
    const [description, setDescription] = useState(todo.description || "");
    const [date, setDate] = useState(todo.date || "");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim()) return;

        dispatch({
            type: "EDIT_TODO",
            payload: { ...todo, title, description, date },
        });

        onClose();
    };

    return (
        <div className="modal modal-open">
            <div className="modal-box relative">
                <button
                    className="btn btn-sm btn-circle absolute right-2 top-2"
                    onClick={onClose}
                >
                    ✕
                </button>

                <h3 className="font-bold text-lg mb-4">Edit Task</h3>

                <form onSubmit={handleSubmit} className="space-y-3">
                    <div>
                        <label className="label">Title</label>
                        <input
                            type="text"
                            className="input input-bordered w-full"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label className="label">Description</label>
                        <textarea
                            className="textarea textarea-bordered w-full"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
                    </div>

                    <div>
                        <label className="label">Due Date</label>
                        <input
                            type="date"
                            className="input input-bordered w-full"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </div>

                    <button type="submit" className="btn btn-primary w-full">
                        Save Changes
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EditTodo;