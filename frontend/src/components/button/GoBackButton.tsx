import { IconButton, IconButtonProps } from '@mui/material';
import { useNavigate } from 'react-router';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

// -------------------------------------------------------

type GoBackButtonProps = IconButtonProps & {
    onClick?: () => void,
    customBgColor?: string,
}

export default function GoBackButton({ onClick, customBgColor, size, color, sx }: GoBackButtonProps) {

    const navigate = useNavigate();

    return <IconButton
        size={size || 'small'}
        color={color || 'inherit'}
        onClick={() => onClick ? onClick() : navigate(-1)}
        sx={{
            mb: 3,
            px: 1,
            borderRadius: 3,
            '&.MuiButtonBase-root': { backgroundColor: customBgColor || 'common.white' },
            ...sx
        }}
    >
        <ArrowBackIosNewIcon sx={{ width: 20 }} />
    </IconButton>;

}
