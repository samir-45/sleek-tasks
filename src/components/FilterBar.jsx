import React from 'react';
import { useTodos } from '../context/TodoProvider';
import SearchBar from './SearchBar';

const FilterBar = () => {

  const { state, dispatch } = useTodos();

  return (
    <div className="bg-white px-3 py-4 rounded-lg flex flex-col sm:flex-row justify-between my-4">
      <div className='w-full'>
        <SearchBar></SearchBar>
      </div>
      <div className='flex gap-2 items-center'>
        <div className='w-30'>
          <select
            value={state.filter} // bind to current filter
            onChange={(e) => dispatch({ type: "SET_FILTER", payload: e.target.value })}
            className="select w-full bg-gray-100"
          >
            <option value="all">All</option>
            <option value="active">Active</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        <button
          onClick={() => dispatch({ type: "CLEAR_COMPLETED" })}
          className="btn bg-red-400"
        >
          Clear Completed
        </button>
      </div>

    </div>
  );
};

export default FilterBar;