import React from 'react';
import { useTodos } from '../context/TodoProvider';

const SearchBar = () => {

    const {state, dispatch} = useTodos();

    return (
    <div className="my-4 ">
      <input
        type="text"
        placeholder="Search tasks..."
        className="input input-bordered bg-gray-100 w-80"
        value={state.search}
        onChange={(e) => dispatch({ type: "SET_SEARCH", payload: e.target.value })}
      />
    </div>
    );
};

export default SearchBar;