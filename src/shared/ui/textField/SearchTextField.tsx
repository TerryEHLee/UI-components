import { Search } from '@mui/icons-material';
import { InputAdornment, TextField } from '@mui/material';

export const SearchTextField = () => {
    return (
        <TextField
            placeholder="Search"
            variant="standard"
            size="small"
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <Search />
                    </InputAdornment>
                ),
            }}
        />
    );
};
