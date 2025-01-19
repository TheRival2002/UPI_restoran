import { Alert, AlertProps, Snackbar, SnackbarProps } from '@mui/material';

// ----------------------------------------------------------------------

type CustomSnackbarAlertProps = {
    isOpen: boolean;
    onClose: () => void;
    alertMessage?: string;
    snackbarProps?: SnackbarProps;
    alertProps?: AlertProps;
}

export default function CustomSnackbarAlert({
    isOpen,
    onClose,
    alertMessage = 'An error occured',
    snackbarProps,
    alertProps,
}: CustomSnackbarAlertProps) {

    return (
        <Snackbar
            open={isOpen}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            autoHideDuration={5000}
            onClose={onClose}
            {...snackbarProps}
        >
            <Alert
                onClose={onClose}
                variant={'filled'}
                {...alertProps}
            >
                {alertMessage}
            </Alert>
        </Snackbar>
    );

}
