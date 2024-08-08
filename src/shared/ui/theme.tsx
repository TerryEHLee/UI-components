import { createTheme } from '@mui/material/styles';

export const appTheme = createTheme({
    palette: {
        primary: {
            main: 'rgba(22, 118, 243, 1)',
            // light: "",
            dark: 'rgba(15, 82, 170, 1)',
            // contrastText: "",
        },
        secondary: {
            light: 'rgba(151, 159, 171, 1)',
            main: 'rgba(92, 113, 141, 1)',
            contrastText: 'rgba(255, 255, 255, 1)',
        },
        text: { // TODO 이부분은 경희씨가 다시 수정예정
            main: 'rgba(25, 36, 52, 1)',
            light: 'rgba(60, 66, 87, 1)',
            dark: 'rgba(0, 0, 0, 1)',
            contrastText: "",
        },
        error: {
            main: 'rgba(245, 36, 25, 1)',
        },
        // divider: '',
        // warning: {},
        info: {
            main: 'rgba(69, 168, 216, 1)',
        },
        success: {
            main: 'rgba(21, 193, 93, 1)',
        },
        // background: {},
        // action: {},
    },
    components: {
        MuiDataGrid: {
            styleOverrides: {
                root: {
                    borderLeft: 'none',
                    borderRight: 'none',
                    borderRadius: 0,
                    '& .MuiDataGrid-cell:focus': {
                        outline: 'none',
                    },
                    '& .MuiDataGrid-cell:focus-within': {
                        outline: 'none',
                    },
                    '& .MuiDataGrid-columnHeader--sorted, & .MuiDataGrid-columnHeader--sortable': {
                        outline: 'none !important', // dataGrid 셀 선택시 나타나는 파란색 라인 제거
                    },
                    '& .MuiDataGrid-columnHeaderTitle': {
                        fontWeight: 700,
                    },
                    '& .MuiDataGrid-row--dynamicHeight>.MuiDataGrid-cell': {
                        display: 'flex', // dataGrid 높이값 auto 설정시 기본 레이아웃
                        alignItems: 'center',
                        minHeight: '2.25rem',
                        paddingTop: '0.313rem',
                        paddingBottom: '0.313rem',
                    },
                    '& .MuiDataGrid-detailPanelToggleCell': {
                        '.MuiSvgIcon-root': {
                            backgroundColor: 'rgba(245, 36, 25, 1)', // dataGrid expanded 아이콘 확장 전
                            borderRadius: '100%',
                            color: 'rgba(255, 255, 255, 1)',
                        },
                    },
                    '& .MuiDataGrid-detailPanelToggleCell--expanded': {
                        '.MuiSvgIcon-root': {
                            backgroundColor: 'rgba(22, 118, 243, 1)', // dataGrid expanded 아이콘 확장 후
                            borderRadius: '100%',
                            color: 'rgba(255, 255, 255, 1)',
                        },
                    },
                },
            },
        },
        MuiAutocomplete: {
            // https://stackoverflow.com/questions/64171767/change-the-color-of-mui-autocomplete-option참조 해서 변경
            styleOverrides: {
                root: {
                    '& .MuiChip-root': {
                        height: '1.625rem',
                    },
                    '& .MuiAutocomplete-inputRoot': {
                        padding: '0 0.313rem',
                    },
                },
            },
            // variants: [
            //     {
            //         // props: { variant: 'outlined' },
            //         style: {
            //             '&[required]': {
            //                 backgroundColor: 'rgba(56, 255, 73, 0.1)', // autocomplete required
            //             },
            //         },
            //     },
            // ],
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    boxShadow: 'none', // Button shadow
                    '&:hover': {
                        boxShadow: 'none',
                    },
                },
                sizeSmall: {
                    textTransform: 'none',
                    lineHeight: '1.1',

                    '& .MuiSvgIcon-root': {
                        fontSize: '0.875rem',
                    },
                },
                sizeMedium: {
                    textTransform: 'none',
                    fontWeight: 700,
                    lineHeight: '1.4',

                    '& .MuiSvgIcon-root': {
                        fontSize: '1.2rem',
                    },
                },
                sizeLarge: {
                    minWidth: '10.9375rem',
                    lineHeight: '1.1',
                    fontSize: '1rem',
                    fontWeight: 700,
                    padding: '0.625rem',

                    '& .MuiSvgIcon-root': {
                        fontSize: '1.375rem',
                    },
                },
            },
        },
        MuiButtonGroup: {
            styleOverrides: {
                root: {
                    boxShadow: 'none', // Button shadow
                    '&:hover': {
                        boxShadow: 'none',
                    },
                },
                // sizeSmall: {
                //     // textTransform: 'none',
                //     // lineHeight: '1.1',
                //     // fontSize: '0.625rem',
                //
                //     // '& .MuiSvgIcon-root': {
                //     //     fontSize: '0.875rem',
                //     // },
                // },
                // sizeMedium: {
                //     textTransform: 'none',
                //     fontWeight: 700,
                //     lineHeight: '1.4',
                //
                //     '& .MuiSvgIcon-root': {
                //         fontSize: '1.2rem',
                //     },
                // },
                // sizeLarge: {
                //     minWidth: '10.9375rem',
                //     lineHeight: '1.3',
                //     fontSize: '1rem',
                //     fontWeight: 700,
                //
                //     '& .MuiSvgIcon-root': {
                //         fontSize: '1.375rem',
                //     },
                // },
            },
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    marginRight: 0, // 아이콘이 TextField 영역을 벗어나는 현상 수정
                    '&.MuiIconButton-sizeSmall': {
                        padding: '0.25rem',
                        '& .MuiSvgIcon-root, svg': {
                            fontSize: '1.125rem',
                            width: '1.125rem',
                            height: '1.125rem',
                        },
                    },
                    '&.MuiIconButton-sizeMedium': {
                        padding: '0.25rem',
                        '& .MuiSvgIcon-root, svg': {
                            fontSize: '1.5rem',
                            width: '1.5rem',
                            height: '1.5rem',
                        },
                    },
                    '&.MuiIconButton-sizeLarge': {
                        padding: '0.375rem',
                        '& .MuiSvgIcon-root, svg': {
                            fontSize: '1.75rem',
                            width: '1.75rem',
                            height: '1.75rem',
                        },
                    },
                    '&.mui-icon-square': {
                        borderRadius: '0.25rem',

                        '&.MuiIconButton-colorPrimary': {
                            color: '#ffffff',
                            backgroundColor: '#1676f3',
                            '&:hover': { backgroundColor: 'rgb(15, 82, 170)' },
                        },
                    },
                },
            },
        },
        MuiFormLabel: {
            styleOverrides: {
                asterisk: {
                    // required mark
                    color: '#f52419',
                    fontSize: '1.2rem',
                    marginLeft: '0.12rem',
                },
                root: {
                    '&.Mui-disabled, &.Mui-error': {
                        '& .MuiFormLabel-asterisk': {
                            color: 'inherit',
                        },
                    },
                },
            },
        },
        MuiFormControlLabel: {
            styleOverrides: {
                root: {
                    marginLeft: 0,
                    marginRight: '0.625rem',
                },
            },
        },
        MuiFormHelperText: {
            styleOverrides: {
                root: {
                    marginLeft: '0', // error message
                },
            },
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: '#000000', // label text (default)
                    fontSize: '0.875rem',
                    '&.MuiInputLabel-sizeSmall': {
                        transform: 'initial',
                        fontSize: '0.875rem',
                        color: '#1676f3',
                        fontWeight: 700,
                    },
                },
            },
            variants: [
                {
                    props: { variant: 'standard' },
                    style: {},
                },
                {
                    props: { variant: 'outlined' },
                    style: {
                        top: '-3px',
                        color: 'rgba(0, 0, 0, 0.6)',
                    },
                },
            ],
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    '&:not(.Mui-disabled, .Mui-error):hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#a4a4a4', // OutlinedInput hover
                    },
                    '&.Mui-focused:not(.Mui-disabled, .Mui-error) .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#a4a4a4', // OutlinedInput focus
                    },
                    '&.Mui-error:not(.Mui-disabled):hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#f52419', // OutlinedInput error hover
                    },
                    '&.Mui-error.Mui-focused:not(.Mui-disabled) .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#f52419', // OutlinedInput error focus
                    },
                },
            },
        },
        MuiRadio: {
            styleOverrides: {
                root: {
                    padding: '0.188rem',

                    '& .MuiSvgIcon-root': {
                        fontSize: '1.25rem', // Radio Icon
                    },
                    '&.Mui-checked': {
                        color: '#1676f3',
                    },
                },
            },
        },
        MuiInputBase: {
            styleOverrides: {
                root: {
                    '&.Mui-error': {
                        borderColor: '#f52419',
                    },
                    '& .MuiSelect-select': {
                        height: '1.5rem',
                    },
                    '& .MuiSelect-outlined': {
                        backgroundColor: '#f9f9f9', // Background Color
                    },
                    '&[required] .MuiSelect-select': {
                        backgroundColor: 'rgba(56, 255, 73, 0.1)', // required Background Color
                    },
                    '& .MuiInputBase-input:not(.MuiInputBase-inputSizeSmall), & .MuiInputBase-input.MuiSelect-select:not(.MuiInputBase-inputSizeSmall)':
                        {
                            height: '1.5rem', // TextField와 동일한 높이
                            fontSize: '0.875rem',
                            paddingTop: '0.75rem',
                            paddingBottom: '0.75rem',
                        },
                    '& .MuiInputBase-sizeSmall': {
                        height: '2rem', // Small Size
                        fontSize: '0.88rem',
                    },
                    '&.MuiInputBase-multiline': {
                        padding: 0,
                    },
                    '&.MuiInputBase-multiline .MuiInputBase-inputMultiline': {
                        padding: '0.75rem',
                    },
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiInputBase-input': {
                        height: '1.5rem', // TextField 높이 조정
                    },
                    '&:not(.Mui-disabled, .Mui-error) .MuiInputBase-root:before, &:not(.Mui-disabled, .Mui-error) .MuiInputBase-root:after':
                        {
                            borderColor: '#cccccc', // TextField
                        },
                    '&:not(.Mui-disabled, .Mui-error):hover .MuiInputBase-root:before, &:not(.Mui-disabled, .Mui-error):hover .MuiInputBase-root:after':
                        {
                            borderWidth: '0.06rem', // TextField hover
                            borderColor: '#a4a4a4',
                        },
                    '&:not(.Mui-disabled, .Mui-error) .Mui-focused.MuiInputBase-root:before, &:not(.Mui-disabled, .Mui-error) .Mui-focused.MuiInputBase-root:after':
                        {
                            borderWidth: '0.12rem', // TextField focus
                            borderColor: '#a4a4a4',
                        },
                    '&.mui-textfield-required .MuiInputBase-root:not(.Mui-disabled, .Mui-error):before, &.mui-textfield-required .MuiInputBase-root:not(.Mui-disabled, .Mui-error):after':
                        {
                            borderColor: '#00a344', // TextField required
                        },
                    '&.mui-textfield-required:hover .MuiInputBase-root:not(.Mui-disabled, .Mui-error):before, &.mui-textfield-required:hover .MuiInputBase-root:not(.Mui-disabled, .Mui-error):after':
                        {
                            borderColor: '#00a344', // TextField required hover
                        },
                    '&.mui-textfield-required .MuiInputBase-root.Mui-error:not(.Mui-disabled):before, &.mui-textfield-required .MuiInputBase-root.Mui-error:not(.Mui-disabled):after':
                        {
                            borderColor: '#f52419', // TextField required error
                        },
                    '&.mui-textfield-required:hover .MuiInputBase-root.Mui-error:before, &.mui-textfield-required:hover .MuiInputBase-root.Mui-error:not(.Mui-disabled):after':
                        {
                            borderColor: '#f52419', // TextField required error hover
                        },
                    '& .mui-select-placeholder': {
                        color: '#a4a4a4', // placeholder Color
                    },
                    '&.MuiTextField-root .MuiInputBase-root': {
                        fontSize: '1rem', // Medium Size (default)
                    },
                    '&.MuiTextField-root .MuiInputBase-root.MuiInputBase-sizeSmall': {
                        fontSize: '0.88rem', // Small Size
                    },
                    '&.MuiTextField-root .MuiInputBase-root.MuiInputBase-sizeSmall .MuiSvgIcon-root': {
                        fontSize: '1.125rem', // Small Size - Icon
                        width: '1.125rem',
                        height: '1.125rem',
                    },
                    '&.mui-textfield-size-small .MuiOutlinedInput-root': {
                        height: '2rem', // Small Size - DatePicker Container
                    },
                    '&.mui-textfield-size-small .MuiInputBase-input': {
                        fontSize: '0.88rem', // Small Size - DatePicker Textfield
                    },
                    '&.mui-textfield-size-small .MuiSvgIcon-root': {
                        fontSize: '1.125rem !important', // Small Size - DatePicker Icon
                        width: '1.125rem !important',
                        height: '1.125rem !important',
                    },
                    '&.mui-textfield-underline': {
                        borderBottom: '1px solid rgba(0, 0, 0, 0.23)', // DatePicker Underline
                    },
                    '&.mui-textfield-underline .MuiInputBase-input': {
                        paddingLeft: '0', // DatePicker Underline
                    },
                    '&.mui-textfield-underline .MuiOutlinedInput-notchedOutline': {
                        border: 'none', // DatePicker Outline Delete
                    },
                },
            },
            variants: [
                {
                    props: { variant: 'standard' }, // underline
                    style: {
                        '&.MuiTextField-root .MuiInputBase-root': {},
                        '&.MuiTextField-root .MuiInputBase-root.MuiInputBase-sizeSmall': {
                            paddingTop: '0.19rem', // Small Size
                            paddingBottom: '0.19rem',
                            height: '2rem',
                            boxSizing: 'border-box',
                        },
                    },
                },
                {
                    props: { variant: 'outlined' }, // outline
                    style: {
                        '&.mui-textfield-required .MuiSelect-outlined': {
                            backgroundColor: 'rgba(56, 255, 73, 0.1)', // required Background Color
                        },
                        '&.MuiTextField-root .MuiInputBase-root.MuiInputBase-sizeSmall .MuiInputBase-inputSizeSmall': {
                            paddingTop: '0.38rem', // Small Size
                            paddingBottom: '0.38rem',
                            height: '2rem',
                            boxSizing: 'border-box',
                        },
                    },
                },
            ],
        },
        MuiSelect: {
            styleOverrides: {
                root: {
                    fontSize: '0.875rem',

                    '& .MuiSelect-select.MuiInputBase-input': {
                        paddingTop: '0.75rem',
                        paddingBottom: '0.75rem',
                    },
                    '&.MuiInputBase-sizeSmall': {
                        height: '2rem', // Small Size
                        fontSize: '0.88rem',
                    },
                    '&.MuiInputBase-sizeSmall .MuiSvgIcon-root': {
                        fontSize: '1.125rem', // Small Size - Icon
                    },
                    '& .MuiSelect-select.MuiInputBase-inputSizeSmall': {
                        paddingTop: '0.19rem', // Small Size
                        paddingBottom: '0.19rem',
                    },
                },
            },
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    fontSize: '0.875rem',
                    '&:hover': {
                        backgroundColor: 'rgba(0, 0, 0, 0.04)', // 배경색 변경
                    },
                },
            },
        },
        MuiMenu: {
            styleOverrides: {
                list: {
                    paddingTop: '0',
                    paddingBottom: '0',
                },
            },
        },
        MuiDatePicker: {
            styleOverrides: {
                root: {
                    '& .MuiInputBase-root.MuiInputBase-sizeSmall': {
                        fontSize: '0.88rem', // Small Size
                    },
                },
            },
        },
        MuiTimePicker: {
            styleOverrides: {
                root: {},
                input: {
                    '&.MuiInputBase-root.MuiInputBase-sizeSmall': {
                        fontSize: '0.88rem',
                    },
                },
            },
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    color: '#192434',
                },
                h1: {
                    fontSize: '2.125rem', // 34px
                    fontWeight: 700,
                },
                h2: {
                    fontSize: '1.375rem', // 22px
                    fontWeight: 700,
                },
                h3: {
                    fontSize: '1rem', // 16px
                    fontWeight: 700,
                },
                h4: {
                    fontSize: '0.938rem', // 15px
                    fontWeight: 400,
                },
                h5: {
                    fontSize: '0.938rem', // 15px
                    fontWeight: 400,
                },
                body1: {
                    fontSize: '0.875rem', // 14px
                    fontWeight: 400,
                },
            },
        },
        MuiChip: {
            styleOverrides: {
                sizeSmall: {
                    fontSize: '0.75rem',
                    height: '1.375rem',
                    '.MuiChip-iconSmall': {
                        fontSize: '0.75rem',
                    },
                    '.MuiChip-labelSmall': {
                        padding: '0.375rem',
                    },
                },
                label: {
                    lineHeight: '1.2',
                },
            },
        },
        MuiStack: {
            styleOverrides: {
                root: {
                    paddingTop: '0 !important',
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    boxShadow: 'none',
                    border: '1px solid rgba(209, 213, 219, 1)',
                },
            },
        },
        // MuiTap: {
        //     palette: {
        //         color: {
        //             default: '#007FFF',
        //             achromatic: {
        //                 white: '#fff',
        //                 black: '#000',
        //             },
        //             blue: {
        //                 50: '#F0F7FF',
        //                 100: '#C2E0FF',
        //                 200: '#80BFFF',
        //                 300: '#66B2FF',
        //                 400: '#3399FF',
        //                 500: '#007FFF',
        //                 600: '#0072E5',
        //                 700: '#0059B2',
        //                 800: '#004C99',
        //                 900: '#003A75',
        //             },
        //             grey: {
        //                 50: '#F3F6F9',
        //                 100: '#E5EAF2',
        //                 200: '#DAE2ED',
        //                 300: '#C7D0DD',
        //                 400: '#B0B8C4',
        //                 500: '#9DA8B7',
        //                 600: '#6B7A90',
        //                 700: '#434D5B',
        //                 800: '#303740',
        //                 900: '#1C2025',
        //             },
        //             pink: {
        //                 500: '#b79daf',
        //             },
        //         },
        //     },
        // },
        MuiTab: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                },
            },
        },
        MuiCheckbox: {
            styleOverrides: {
                root: {
                    padding: '0.188rem', // 3px
                },
            },
        },
    },
});
