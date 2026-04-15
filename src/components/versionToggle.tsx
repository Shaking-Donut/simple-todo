import { Box, MenuItem, Select } from '@mui/material'
import { useAppSettings } from '@/stores/useAppSettings'

const AppVersions = {
    traditional: 'Traditional',
    aiSupported: 'AI Supported',
}

export function VersionToggle() {
    const appVersion = useAppSettings((state) => state.appVersion)
    const setAppVersion = useAppSettings((state) => state.setAppVersion)

    return (
        <Box sx={{ width: '100%' }}>
            <Select
                value={appVersion}
                onChange={(e) => setAppVersion(e.target.value)}
                fullWidth
                renderValue={(value) => `Version: ${AppVersions[value]}`}
            >
                {Object.entries(AppVersions).map(([key, label]) => (
                    <MenuItem key={key} value={key}>
                        {label}
                    </MenuItem>
                ))}
            </Select>
        </Box>
    )
}
