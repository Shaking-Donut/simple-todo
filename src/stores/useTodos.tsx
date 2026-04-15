import type { Todo } from '@/types/todos'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { generateRandomUUID } from '@/utils/randomUUID'

type TodoStore = {
    todos: Todo[]
    addTodo: (text: string) => void
    toggleTodo: (id: string) => void
    removeTodo: (id: string) => void
}

export const useTodos = create<TodoStore>()(
    persist(
        (set) => ({
            todos: [],
            addTodo: (text) =>
                set((state) => {
                    const newTodo: Todo = {
                        id: generateRandomUUID(),
                        text,
                        dateCreated: new Date(),
                        completed: false,
                    }
                    return { todos: [...state.todos, newTodo] }
                }),
            toggleTodo: (id) =>
                set((state) => {
                    return {
                        todos: state.todos.map((todo) =>
                            todo.id === id
                                ? { ...todo, completed: !!todo.completed ? false : new Date() }
                                : todo,
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
