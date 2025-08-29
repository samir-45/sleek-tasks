import React from 'react';
import AddTodo from '../components/AddTodo';
import AddTodoButton from '../components/AddTodoButton';
import TodoStat from '../components/TodoStat';
import FilterBar from '../components/FilterBar';
import TodoList from '../components/TodoList';

const Home = () => {
  return (
    <div className='w-full'>
      <div className="min-h-screen w-full bg-white relative flex justify-center items-center">

        {/* Dual Gradient Overlay (Bottom) Background */}

        <div
          className="fixed inset-0 z-0 pointer-events-none"
          style={{
            background: "radial-gradient(125% 125% at 50% 90%, #fff 40%, #6366f1 100%)",
          }}
        />

        {/* Your Content/Components */}

        <div className="relative bg-gradient-to-b text-slate-800 bg-white/10 backdrop-blur-md border-b border-white/10 shadow rounded-2xl p-6 md:px-2 md:py-8 w-11/12  mx-auto z-50">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-extrabold mb-6">Sleek Tasks - organize your daily tasks</h1>
            <TodoStat></TodoStat>
            <FilterBar></FilterBar>
            <AddTodoButton></AddTodoButton>
            <TodoList></TodoList>
          </div>
        </div>

      </div>

    </div>

  );
};

export default Home;