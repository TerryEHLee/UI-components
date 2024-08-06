import AddIcon from '@mui/icons-material/Add';
import LogoutIcon from '@mui/icons-material/Logout';
import {
    Button,
    FormControl,
    FormControlLabel,
    IconButton,
    InputLabel,
    Radio,
    RadioGroup,
    TextField,
} from '@mui/material';
import React from 'react';

export const Header = ({ pageTitle }) => {
    return (
        <header className="cont-head type-grey">
            <div className="head-top">
                <div className="user-info">
                    <div className="img">
                        <img src="/src/img/temp/temp-profile.png" alt="profile" />
                    </div>
                    <div className="name">
                        <span>Hello, </span>
                        <strong>Dr. Vctoria</strong>
                    </div>
                </div>
                <div className="user-common">
                    <ul className="icon-list">
                        <li>
                            <a href="#" className="alert-icon">
                                <span className="alert-icon--num">99+</span>
                                <i className="icon icon--lock"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="alert-icon">
                                <span className="alert-icon--num">99+</span>
                                <i className="icon icon--bell"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="alert-icon">
                                <span className="alert-icon--num">99+</span>
                                <i className="icon icon--call"></i>
                            </a>
                        </li>
                    </ul>
                    <div className="date">
                        <span>Wednesday, 06/11/2022 9:56 PM PST</span>
                    </div>
                    <IconButton aria-label="logout" color="primary" className="ml5">
                        <LogoutIcon />
                    </IconButton>
                </div>
            </div>
            <div className="head-bottom">
                <div className="head-tit flex-end">
                    <span>{pageTitle}</span>
                    <FormControl className="ml30">
                        <RadioGroup row name="radioStatus" defaultValue="active">
                            <FormControlLabel label="Active" value="active" control={<Radio />} />
                            <FormControlLabel label="Suspended" value="suspended" control={<Radio />} />
                        </RadioGroup>
                    </FormControl>
                    <div className="ml30">
                        <InputLabel htmlFor="clinicBranch" variant="standard" size="small" className="label-xs">
                            Clinic/Branch
                        </InputLabel>
                        <TextField
                            variant="outlined"
                            size="small"
                            id="clinicBranch"
                            sx={{ width: 133 }}
                            select
                            SelectProps={{
                                displayEmpty: true,
                                renderValue: (value): React.ReactNode => {
                                    if (!value) {
                                        return <em className="mui-select-placeholder">Clinic Branch</em>;
                                    }
                                    return value as React.ReactNode;
                                },
                            }}
                        />
                    </div>
                    <div className="ml5">
                        <InputLabel htmlFor="facility" variant="standard" size="small" className="label-xs">
                            Facility
                        </InputLabel>
                        <TextField
                            variant="outlined"
                            size="small"
                            id="facility"
                            select
                            sx={{ width: 133 }}
                            SelectProps={{
                                displayEmpty: true,
                                renderValue: (value): React.ReactNode => {
                                    if (!value) {
                                        return <em className="mui-select-placeholder">All</em>;
                                    }
                                    return value as React.ReactNode;
                                },
                            }}
                        />
                    </div>
                </div>
                <Button
                    variant="contained"
                    color="primary"
                    size="medium"
                    startIcon={<AddIcon />}
                    sx={{
                        marginLeft: 'auto',
                    }}
                >
                    ADD a New Patient
                </Button>
            </div>
        </header>
    );
};
