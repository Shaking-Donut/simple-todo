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
