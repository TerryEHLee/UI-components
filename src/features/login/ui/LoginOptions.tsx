import { Checkbox, FormControlLabel, Grid, Link } from '@mui/material';

export const LoginOptions = () => {

    return (
        <Grid container sx={{ alignItems: 'center' }}>
            <FormControlLabel control={<Checkbox value="isRemember" color="primary" />} label="Remember User ID" />

                <Link
                    href="#"
                    variant="body2"
                    underline="none"
                    sx={{ marginLeft: 'auto' }}
                >
                    Forgot your password?
                </Link>
        </Grid>
    );
};
