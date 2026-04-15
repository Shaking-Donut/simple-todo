import { Button, Stack, TextField } from '@mui/material'
import { useTodos } from '@/stores/useTodos'
import { Add } from '@mui/icons-material'
import { useState } from 'react'

export function TodoInput() {
    const [value, setValue] = useState('')
    const addTodo = useTodos((state) => state.addTodo)

    const handleAddTodo = () => {
        addTodo(value)
        setValue('')
    }

    return (
        <Stack direction={'row'} spacing={2} sx={{ p: 2 }}>
            <TextField
                placeholder="Add a new todo"
                variant="outlined"
                fullWidth
                autoComplete="off"
                slotProps={{ htmlInput: { inputMode: 'search' } }}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' && value.trim() !== '') {
                        handleAddTodo()
                    }
                }}
            />
            <Button
                variant="contained"
                sx={{ height: '56px', minWidth: '56px' }}
                onClick={handleAddTodo}
                disabled={value.trim() === ''}
            >
                <Add />
            </Button>
        </Stack>
    )
}
