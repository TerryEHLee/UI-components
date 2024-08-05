import { TextField } from '@mui/material';
import type { TextFieldProps } from '@mui/material';
// import InputMask from 'react-input-mask';
// import type { InputMaskProps } from 'react-input-mask';

// const PhoneMaskCustom = ({ inputRef, ...other }) => (
//     <InputMask {...other} ref={inputRef} mask="999-999-9999" maskChar="_" maskPlaceholder="-" />
// );

// type PhoneTextFieldProps = TextFieldProps & InputMaskProps;

export const PhoneTextField = ({ ...props }) => {
    return (
        <TextField
            {...props}
            // InputProps={{
            //     inputComponent: PhoneMaskCustom,
            // }}
        />
    );
};
