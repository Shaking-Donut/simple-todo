import { useState } from 'react'
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Drawer,
    Box,
    List,
    ThemeProvider,
    createTheme,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { ThemeToggle } from './themeToggle'
import { VersionToggle } from './versionToggle'
import { BrowserView, MobileView } from 'react-device-detect'

const theme = createTheme({
    components: {
        MuiSelect: {
            defaultProps: {
                variant: 'standard',
                disableUnderline: true,
                color: 'secondary',
            },
            styleOverrides: {
                select: {
                    color: 'white',
                },
                icon: {
                    color: 'white',
                },
            },
        },
    },
})

export function Navbar() {
    const [drawerOpen, setDrawerOpen] = useState(false)

    const handleDrawerToggle = () => {
        setDrawerOpen((prev) => !prev)
    }

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <MobileView>
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
                    </MobileView>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Simple Todo
                    </Typography>
                    <BrowserView>
                        <ThemeProvider theme={theme}>
                            <List
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    gap: 2,
                                    color: 'white',
                                }}
                            >
                                <VersionToggle />
                                <ThemeToggle />
                            </List>
                        </ThemeProvider>
                    </BrowserView>
                </Toolbar>
            </AppBar>
            <MobileView>
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

                            <List
                                sx={{
                                    mt: 'auto',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 2,
                                }}
                            >
                                <VersionToggle />
                                <ThemeToggle />
                            </List>
                        </Box>
                    </Drawer>
                </nav>
            </MobileView>
        </>
    )
}
