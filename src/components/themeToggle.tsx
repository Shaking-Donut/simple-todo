import { Box, MenuItem, Select, useColorScheme } from '@mui/material'
import { capitalizeFirstLetter } from '@/utils/capitalize'

const ColorSchemes = ['light', 'dark', 'system'] as const

export function ThemeToggle() {
    const { mode, setMode } = useColorScheme()

    return (
        <Box sx={{ width: '100%' }}>
            <Select
                value={mode ?? 'system'}
                onChange={(e) => setMode(e.target.value)}
                fullWidth
                renderValue={(value) => `Theme: ${capitalizeFirstLetter(value)}`}
            >
                {ColorSchemes.map((scheme) => (
                    <MenuItem key={scheme} value={scheme}>
                        {capitalizeFirstLetter(scheme)}
                    </MenuItem>
                ))}
            </Select>
        </Box>
    )
}
