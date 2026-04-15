import { createTheme } from '@mui/material'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'

const theme = createTheme({
    colorSchemes: {
        dark: true,
    },
})

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    return (
        <MuiThemeProvider theme={theme} defaultMode="system">
            {children}
        </MuiThemeProvider>
    )
}

export const appBarSelectCustomTheme = createTheme({
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
