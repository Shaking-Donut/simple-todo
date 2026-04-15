import { useState } from 'react'
import { Box, Fab } from '@mui/material'
import { Add } from '@mui/icons-material'
import { useTodos } from '@/stores/useTodos'
import { Navbar } from '@/components/navbar'
import { TodoList } from '@/components/ai/TodoList'
import { AddTodoDialog } from '@/components/ai/AddTodoDialog'

export const AISupportedUI = () => {
    const [dialogOpen, setDialogOpen] = useState(false)
    const [inputValue, setInputValue] = useState('')
    const todos = useTodos((state) => state.todos)
    const addTodo = useTodos((state) => state.addTodo)
    const toggleTodo = useTodos((state) => state.toggleTodo)
    const removeTodo = useTodos((state) => state.removeTodo)

    const handleOpenDialog = () => {
        setDialogOpen(true)
    }

    const handleCloseDialog = () => {
        setDialogOpen(false)
        setInputValue('')
    }

    const handleAddTodo = () => {
        if (inputValue.trim() !== '') {
            addTodo(inputValue.trim())
            setInputValue('')
            setDialogOpen(false)
        }
    }

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <Navbar />

            <Box
                sx={{
                    flex: 1,
                    overflowY: 'auto',
                    p: { xs: 2, sm: 3, md: 4 },
                    backgroundColor: 'background.default',
                }}
            >
                <TodoList todos={todos} onToggle={toggleTodo} onDelete={removeTodo} />
            </Box>

            {/* FAB Button */}
            <Fab
                color="primary"
                aria-label="add todo"
                onClick={handleOpenDialog}
                sx={{
                    position: 'fixed',
                    bottom: { xs: 24, sm: 32 },
                    right: { xs: 24, sm: 32 },
                }}
            >
                <Add />
            </Fab>

            {/* Add Todo Dialog */}
            <AddTodoDialog
                open={dialogOpen}
                value={inputValue}
                onClose={handleCloseDialog}
                onValueChange={setInputValue}
                onAdd={handleAddTodo}
            />
        </Box>
    )
}
