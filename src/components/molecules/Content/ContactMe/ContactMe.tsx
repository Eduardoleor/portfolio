import {
    Box,
    Button,
    CircularProgress,
    TextField,
    Typography,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { ChangeEvent, FC, useState } from 'react';
import validator from 'validator';

import Snack from 'components/atoms/Snackbar';
import { onSaveItem } from 'utils/firebaseActions';

const ContactMe: FC = () => {
    const { t } = useTranslation('technologies');

    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [isValid, setIsValid] = useState(false);
    const [loading, setLoading] = useState(false);
    const [snackMessage, setSnackMessage] = useState('');

    const handleSucess = () => {
        setSnackMessage(t('contact.success'));
        setEmail('');
        setTimeout(() => {
            setSnackMessage('');
        }, 5000);
    };

    const handleError = () => {
        setError(t('contact.errorInput'));
        setIsValid(false);
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
        if (event.target.value.length > 0 && validator.isEmail(event.target.value)) {
            setIsValid(true);
            setError('');
        } else {
            handleError();
        }
    };

    const handleSaveEmail = () => {
        if (isValid) {
            setLoading(true);
            onSaveItem({
                nameCollection: 'contact',
                item: {
                    email,
                    date: new Date(),
                },
            })
                .then(() => handleSucess())
                .catch(() => setSnackMessage(t('contact.errorService')))
                .finally(() => setLoading(false));
        } else {
            handleError();
        }
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h6" gutterBottom>{t('contact.title')}</Typography>
            <TextField
                id="email"
                label={t('contact.input')}
                type="email"
                fullWidth
                variant="standard"
                color="secondary"
                error={error.length > 0}
                helperText={error}
                value={email}
                onChange={handleChange}
            />
            <Button
                color="inherit"
                variant="outlined"
                disabled={loading}
                fullWidth
                sx={{ mt: 3 }}
                onClick={() => handleSaveEmail()}
            >
                {loading ? <CircularProgress color="inherit" /> : t('contact.button')}
            </Button>
            <Snack open={snackMessage.length > 0} message={snackMessage} duration={3000} />
        </Box>
    );
};
export default ContactMe;