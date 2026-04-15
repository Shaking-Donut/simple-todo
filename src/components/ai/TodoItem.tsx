import {
    ListItem,
    ListItemIcon,
    ListItemText,
    Checkbox,
    IconButton,
    Paper,
    Typography,
} from '@mui/material'
import { Delete } from '@mui/icons-material'
import type { Todo } from '@/types/todos'

interface TodoItemProps {
    todo: Todo
    onToggle: (id: string) => void
    onDelete: (id: string) => void
}

export function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
    return (
        <Paper
            elevation={1}
            sx={{
                mb: 1,
                display: 'flex',
                alignItems: 'center',
                paddingInline: 2,
                overflow: 'hidden',
                transition: 'all 0.2s ease',
                '&:hover': {
                    elevation: 2,
                },
            }}
        >
            <ListItem
                sx={{
                    flex: 1,
                    py: 1,
                    px: 0,
                }}
            >
                <ListItemIcon sx={{ minWidth: 40 }}>
                    <Checkbox
                        edge="start"
                        checked={!!todo.completed}
                        onChange={() => onToggle(todo.id)}
                        tabIndex={-1}
                        disableRipple
                    />
                </ListItemIcon>
                <ListItemText
                    primary={
                        <Typography
                            sx={{
                                textDecoration: todo.completed ? 'line-through' : 'none',
                                color: todo.completed ? 'text.secondary' : 'text.primary',
                            }}
                        >
                            {todo.text}
                        </Typography>
                    }
                    secondary={
                        todo.completed && (
                            <Typography variant="caption" color="text.secondary">
                                Completed: {new Date(todo.completed).toLocaleDateString('en-US')} at{' '}
                                {new Date(todo.completed).toLocaleTimeString('en-US', {
                                    hour: '2-digit',
                                    minute: '2-digit',
                                })}
                            </Typography>
                        )
                    }
                />
            </ListItem>
            <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => onDelete(todo.id)}
                color="error"
            >
                <Delete />
            </IconButton>
        </Paper>
    )
}
