import { Box, IconButton, Typography } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

// ----------------------------------------------------------------------

export default function QuantityButtonGroup() {
    return (
        <Box
            display={'flex'}
            alignItems={'center'}
            gap={1.5}
        >
            <IconButton
                color={'primary'}
                sx={{
                    border: '1px solid',
                    borderRadius: '100%',
                    height: 30,
                    width: 30,
                }}
            >
                <RemoveIcon sx={{ width: 20 }} />
            </IconButton>
            <Typography>
                1
            </Typography>
            <IconButton
                color={'primary'}
                sx={{
                    border: '1px solid',
                    borderColor: 'primary.main',
                    borderRadius: '100%',
                    height: 30,
                    width: 30,
                    bgcolor: 'primary.main',
                    color: 'common.white',
                }}
            >
                <AddIcon sx={{ width: 20 }} />
            </IconButton>
        </Box>
    );
}
