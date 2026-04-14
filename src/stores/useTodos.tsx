import type { Todo } from '@/types/todos'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type TodoStore = {
    todos: Todo[]
    addTodo: (text: string) => void
    completeTodo: (id: string) => void
    removeTodo: (id: string) => void
}

export const useTodos = create<TodoStore>()(
    persist(
        (set) => ({
            todos: [],
            addTodo: (text) =>
                set((state) => {
                    const newTodo: Todo = {
                        id: crypto.randomUUID(),
                        text,
                        dateCreated: new Date(),
                        completed: false,
                    }
                    return { todos: [...state.todos, newTodo] }
                }),
            completeTodo: (id) =>
                set((state) => {
                    return {
                        todos: state.todos.map((todo) =>
                            todo.id === id ? { ...todo, completed: new Date() } : todo,
                        ),
                    }
                }),
            removeTodo: (id) =>
                set((state) => {
                    return { todos: state.todos.filter((todo) => todo.id !== id) }
                }),
        }),
        {
            name: 'todos',
        },
    ),
)
