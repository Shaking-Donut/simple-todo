import { TodoInput } from '@/components/todoInput'
import TodoList from '@/components/todoList'
import { Navbar } from '@/components/navbar'
import { Box } from '@mui/material'

export function TraditionalUI() {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Navbar />
                <TodoInput />
                <TodoList />
            </Box>
        </>
    )
}
