import { TextField as MuiTextField } from '@mui/material';
import type { TextFieldProps } from '@mui/material/TextField/TextField';
import { useController } from 'react-hook-form';
import type { FieldPath, FieldValues, UseControllerProps } from 'react-hook-form/dist/types';

export const TextField = <
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
    ...props
}: TextFieldProps & UseControllerProps<TFieldValues, TName>) => {
    const {
        field,
        fieldState: { error },
    } = useController(props);

    return (
        <>
            <MuiTextField {...props} {...field} error={!!error} helperText={!!error && error.message} />
        </>
    );
};
