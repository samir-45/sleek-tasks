import { createContext, useContext, useEffect, useReducer } from "react"

const todoReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return {
                ...state,
                todos: [...state.todos, action.payload],
            }
        case "DELETE_TODO":
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload),
            }
        case "EDIT_TODO":
            return {
                ...state,
                todos: state.todos.map((todo) =>
                    todo.id === action.payload.id ? { ...todo, ...action.payload } : todo
                ),
            };
        case "TOGGLE_TODO":
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
                ),
            }
        case "SET_FILTER":
            return {
                ...state,
                filter: action.payload,
            }
        case "SET_SEARCH":
            return { ...state, search: action.payload };
        case "CLEAR_COMPLETED":
            return {
                ...state,
                todos: state.todos.filter(todo => !todo.completed),
            }
        default:
            return state
    }
}

const TodoContext = createContext()

export function TodoProvider({ children }) {
    // Get data from localstorage
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    const [state, dispatch] = useReducer(todoReducer, {
        todos: savedTodos,
        filter: "all",
        search: "",
    });

    // Save to localstorage when state.todos value change
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(state.todos));
    }, [state.todos]);

    return (
        <TodoContext.Provider value={{ state, dispatch }}>
            {children}
        </TodoContext.Provider>
    )
}

export function useTodos() {
    return useContext(TodoContext)
}