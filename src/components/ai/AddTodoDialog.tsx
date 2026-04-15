import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    Button,
    IconButton,
} from '@mui/material'
import { Close } from '@mui/icons-material'

interface AddTodoDialogProps {
    open: boolean
    value: string
    onClose: () => void
    onValueChange: (value: string) => void
    onAdd: () => void
}

export function AddTodoDialog({ open, value, onClose, onValueChange, onAdd }: AddTodoDialogProps) {
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && value.trim() !== '') {
            onAdd()
        }
    }

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
            <DialogTitle
                sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
            >
                <span>Add a new todo</span>
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        color: 'inherit',
                    }}
                >
                    <Close />
                </IconButton>
            </DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    label="What needs to be done?"
                    type="text"
                    fullWidth
                    variant="outlined"
                    value={value}
                    onChange={(e) => onValueChange(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Enter your todo..."
                    slotProps={{
                        input: {
                            inputMode: 'text',
                        },
                    }}
                    sx={{ mt: 2 }}
                />
            </DialogContent>
            <DialogActions sx={{ p: 2 }}>
                <Button onClick={onClose}>Cancel</Button>
                <Button onClick={onAdd} variant="contained" disabled={value.trim() === ''}>
                    Add Todo
                </Button>
            </DialogActions>
        </Dialog>
    )
}
