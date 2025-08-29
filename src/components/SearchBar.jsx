import React from 'react';
import { useTodos } from '../context/TodoProvider';

const SearchBar = () => {

    const {state, dispatch} = useTodos();

    return (
    <div className="mb-3 sm:mb-0 w-full">
      <input
        type="text"
        placeholder="Search tasks..."
        className="input input-bordered bg-gray-100  w-full md:w-80"
        value={state.search}
        onChange={(e) => dispatch({ type: "SET_SEARCH", payload: e.target.value })}
      />
    </div>
    );
};

export default SearchBar;