import { useMemo } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { TodoItem } from './TodoItem'
import type { Todo } from '@/types/todos'

interface TodoListProps {
    todos: Todo[]
    onToggle: (id: string) => void
    onDelete: (id: string) => void
}

export function TodoList({ todos, onToggle, onDelete }: TodoListProps) {
    const { incompleteTodos, completedTodos } = useMemo(() => {
        const incomplete = todos
            .filter((t) => !t.completed)
            .sort((a, b) => new Date(b.dateCreated).getTime() - new Date(a.dateCreated).getTime())
        const completed = todos
            .filter((t) => t.completed)
            .sort((a, b) => new Date(b.dateCreated).getTime() - new Date(a.dateCreated).getTime())
        return { incompleteTodos: incomplete, completedTodos: completed }
    }, [todos])

    if (todos.length === 0) {
        return (
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '400px',
                }}
            >
                <Stack sx={{ alignItems: 'center' }} spacing={2}>
                    <Typography variant="h6" color="text.secondary">
                        No todos yet
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Click the + button to create your first todo
                    </Typography>
                </Stack>
            </Box>
        )
    }

    return (
        <Box sx={{ maxWidth: 800, mx: 'auto', mb: 10 }}>
            {/* Incomplete Todos Section */}
            {incompleteTodos.length > 0 && (
                <Box sx={{ mb: 4 }}>
                    <Typography variant="h6" sx={{ mb: 2, color: 'text.primary', fontWeight: 600 }}>
                        Active ({incompleteTodos.length})
                    </Typography>
                    {incompleteTodos.map((todo) => (
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                            onToggle={onToggle}
                            onDelete={onDelete}
                        />
                    ))}
                </Box>
            )}

            {/* Completed Todos Section */}
            {completedTodos.length > 0 && (
                <Box sx={{ mb: 4 }}>
                    <Typography
                        variant="h6"
                        sx={{ mb: 2, color: 'text.secondary', fontWeight: 600 }}
                    >
                        Completed ({completedTodos.length})
                    </Typography>
                    {completedTodos.map((todo) => (
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                            onToggle={onToggle}
                            onDelete={onDelete}
                        />
                    ))}
                </Box>
            )}
        </Box>
    )
}
