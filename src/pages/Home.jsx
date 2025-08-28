import React from 'react';
import AddTodo from '../components/AddTodo';
import AddTodoButton from '../components/AddTodoButton';
import TodoStat from '../components/TodoStat';
import FilterBar from '../components/FilterBar';
import TodoList from '../components/TodoList';

const Home = () => {
    return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Todo App</h1>
      <TodoStat></TodoStat>
      <AddTodoButton></AddTodoButton>
      <FilterBar></FilterBar>
      <TodoList></TodoList>
    </div>
    );
};

export default Home;