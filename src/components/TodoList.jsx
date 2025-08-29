import React from 'react';
import { useTodos } from '../context/TodoProvider';
import TodoItem from './TodoItem';

const TodoList = () => {

    const { state } = useTodos();

    const filteredTodos = state.todos.filter(todo => {
        if (state.filter === 'active') return !todo.completed;
        if (state.filter === 'completed') return todo.completed;
        return true;

    })
    .filter((todo) => {
  if (!todo.title) return false;
  return todo.title.toLowerCase().includes(state.search.toLowerCase());
});
    // .filter((todo) =>
    //     todo.title.toLowerCase().includes(state.search.toLowerCase())
    // );

    if (filteredTodos.length === 0) {
        return <div>No tasks found</div>;
    }

    return (
        <div className='space-y-2'>
            {filteredTodos.map(todo => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </div>
    );
};

export default TodoList;