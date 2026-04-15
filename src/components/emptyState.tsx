import { Stack, Typography } from '@mui/material'

export function EmptyState() {
    return (
        <Stack sx={{ alignItems: 'center', minHeight: '400px', marginTop: 10 }} spacing={2}>
            <Typography variant="h6" color="text.secondary">
                No todos yet
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Create your first todo using the input above
            </Typography>
        </Stack>
    )
}
