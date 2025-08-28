import React from 'react';
import { useTodos } from '../context/TodoProvider';

const FilterBar = () => {

    const { dispatch } = useTodos();

    return (
    <div className="flex justify-between my-4">
      <div className="flex gap-2">
        <button onClick={() => dispatch({ type: "SET_FILTER", payload: "all" })}>
          All
        </button>
        <button onClick={() => dispatch({ type: "SET_FILTER", payload: "active" })}>
          Active
        </button>
        <button
          onClick={() => dispatch({ type: "SET_FILTER", payload: "completed" })}
        >
          Completed
        </button>
      </div>
      <button
        onClick={() => dispatch({ type: "CLEAR_COMPLETED" })}
        className="text-red-600"
      >
        Clear Completed
      </button>
    </div>
    );
};

export default FilterBar;