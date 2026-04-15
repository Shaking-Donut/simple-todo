import { useTodos } from '@/stores/useTodos'
import type { Todo } from '@/types/todos'
import { Check, Delete } from '@mui/icons-material'
import { Box, Button, Checkbox, Typography } from '@mui/material'
import {
    SwipeableListItem,
    LeadingActions,
    SwipeAction,
    TrailingActions,
} from 'react-swipeable-list'

export function Todo({ todo, ...rest }: { todo: Todo }) {
    const removeTodo = useTodos((state) => state.removeTodo)
    const toggleTodo = useTodos((state) => state.toggleTodo)

    return (
        <SwipeableListItem
            {...rest}
            leadingActions={
                <LeadingActions>
                    <SwipeAction onClick={() => toggleTodo(todo.id)}>
                        <Box
                            sx={{
                                height: '100%',
                                minWidth: '100%',
                                display: 'flex',
                                p: 0.5,
                            }}
                        >
                            <Button
                                variant={'contained'}
                                color={'primary'}
                                sx={{
                                    height: '100%',
                                    minWidth: '100%',
                                }}
                                disableElevation
                            >
                                <Check />
                            </Button>
                        </Box>
                    </SwipeAction>
                </LeadingActions>
            }
            trailingActions={
                <TrailingActions>
                    <SwipeAction destructive onClick={() => removeTodo(todo.id)}>
                        <Box
                            sx={{
                                height: '100%',
                                minWidth: '100%',
                                display: 'flex',
                                p: 0.5,
                            }}
                        >
                            <Button
                                variant={'contained'}
                                color={'error'}
                                disableElevation
                                sx={{
                                    height: '100%',
                                    minWidth: '100%',
                                }}
                            >
                                <Delete />
                            </Button>
                        </Box>
                    </SwipeAction>
                </TrailingActions>
            }
            key={todo.id}
        >
            <Box
                sx={{
                    p: 1,
                    paddingInline: 1,
                    width: '100%',
                    minHeight: 56,
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <Checkbox checked={!!todo.completed} onChange={() => toggleTodo(todo.id)} />

                <Typography
                    sx={{
                        ml: 1,
                        textDecoration: todo.completed ? 'line-through' : 'none',
                    }}
                >
                    {todo.text}
                </Typography>

                {todo.completed && (
                    <Box
                        component={'span'}
                        sx={{
                            fontSize: '0.75rem',
                            color: 'text.secondary',
                            marginLeft: 'auto',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-end',
                        }}
                    >
                        <span>{new Date(todo.completed).toLocaleDateString('en-US')}</span>
                        <span>
                            {new Date(todo.completed).toLocaleTimeString('en-US', {
                                hour: '2-digit',
                                minute: '2-digit',
                            })}
                        </span>
                    </Box>
                )}
            </Box>
        </SwipeableListItem>
    )
}
