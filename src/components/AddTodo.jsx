import React, { useState } from "react";
import { useTodos } from "../context/TodoProvider";

const AddTodo = ({ onClose }) => {
  const { dispatch } = useTodos();
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_TODO",
      payload: { id: Date.now(), title, description, date, completed: false },
    });
    setTitle("");
    setDescription("");
    setDate("");

    onClose();
  };


  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* modal box */}
      <div className="relative bg-white rounded-lg shadow-lg w-full max-w-md p-6">
        <button
          className="btn btn-sm btn-circle absolute right-2 top-2"
          onClick={onClose}
        >
          ✕
        </button>

        <h3 className="font-bold text-lg mb-4">Add New Task</h3>

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
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTodo;
