import { CssBaseline } from '@mui/material'
import { ThemeProvider } from './theme'

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}
