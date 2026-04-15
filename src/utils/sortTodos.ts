import type { Todo } from '@/types/todos'

export function sortTodos(a: Todo, b: Todo) {
    if (a.completed && !b.completed) {
        return 1
    }
    if (!a.completed && b.completed) {
        return -1
    }
    return 0
}
