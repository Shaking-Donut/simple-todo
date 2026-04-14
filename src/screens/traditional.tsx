import { ThemeToggle } from '@/components/themeToggle'
import { TodoInput } from '@/components/todoInput'
import { Box, AppBar, Toolbar, IconButton, Typography, Drawer, List } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from 'react'
import TodoList from '../components/todoList'

export function TraditionalUI() {
    const [drawerOpen, setDrawerOpen] = useState(false)

    const handleDrawerToggle = () => {
        setDrawerOpen((prev) => !prev)
    }

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={handleDrawerToggle}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Simple Todo
                        </Typography>
                    </Toolbar>
                </AppBar>
                <nav>
                    <Drawer
                        anchor="left"
                        open={drawerOpen}
                        onClose={handleDrawerToggle}
                        variant="temporary"
                        ModalProps={{ keepMounted: true }}
                    >
                        <Box
                            sx={{
                                width: 250,
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                p: 2,
                            }}
                        >
                            <Typography variant="h6">Simple Todo</Typography>

                            <List sx={{ mt: 'auto' }}>
                                <ThemeToggle />
                            </List>
                        </Box>
                    </Drawer>
                </nav>
                <TodoInput />
                <TodoList />
            </Box>
        </>
    )
}
