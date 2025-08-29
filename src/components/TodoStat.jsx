import React from 'react';
import { useTodos } from '../context/TodoProvider';

const TodoStat = () => {
    const { state } = useTodos();

    const total = state.todos.length;
    const completed = state.todos.filter(todo => todo.completed).length;
    const active = total - completed;

    return (
        <div className="flex justify-between bg-white font-semibold p-3 rounded mb-4">
            <h2>Todo Statistics</h2>
            <p>Total Tasks: {total}</p>
            <p>Completed Tasks: {completed}</p>
            <p>Active Tasks: {active}</p>
        </div>
    );
};

export default TodoStat;