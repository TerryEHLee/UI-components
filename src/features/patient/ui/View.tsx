import { FilterAltOff, Search } from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Chip, Grid, InputAdornment, InputLabel, TextField } from '@mui/material';
import type { GridRowSelectionModel } from '@mui/x-data-grid-pro';
import { useEffect, useState, SetStateAction } from 'react';
import { useTitle } from '@/shared/lib/TitleContext.tsx';
import { IconButton, DataGridPro, DataGridOptionData, InputFieldSelect, Select } from '@/shared/ui';


export const PatientView = () => {
    const { setTitle } = useTitle();

    const [rowSelectionModel, setRowSelectionModel] = useState<GridRowSelectionModel>([]);

    const data = {
        columns: [
            { field: 'No', headerAlign: 'center', align: 'center', flex: 0.5 },
            {
                field: 'Name',
                flex: 2,
                renderCell: (params) => <Box className="text-ellipsis">{params.value}</Box>,
            },
            { field: 'LTC', flex: 0.5 },
            { field: 'DOB', flex: 1, headerAlign: 'center', align: 'center' },
            { field: 'EHR ID', flex: 1, headerAlign: 'center', align: 'center' },
            {
                field: 'Phone',
                headerName: 'Phone Number',
                headerAlign: 'center',
                align: 'center',
                // 말줄임표 예제
                renderCell: (params) => <Box className="text-ellipsis">{params.value}</Box>,
                flex: 1,
            },
            {
                field: 'ICD-10s',
                headerAlign: 'center',
                align: 'center',
                flex: 1,
                renderCell: (params) => <Box className="text-ellipsis">{params.value}</Box>,
            },
            { field: 'BillableOption', headerAlign: 'center', align: 'center', flex: 1 },
            {
                field: 'Edit',
                headerAlign: 'center',
                align: 'center',
                flex: 0.5,
                renderCell: (params) => (
                    <IconButton>
                        <CreateIcon color="primary" />
                    </IconButton>
                ),
            },
            {
                field: 'Service Candidates',
                headerAlign: 'center',
                align: 'center',
                flex: 1.7,
                renderCell: (params) => (
                    <Box>
                        <Chip component="button" label="RPM" size="small" color="primary" icon={<AddIcon />} />
                        <span className="ml5">/ CCM Activated</span>
                    </Box>
                ),
            },
            {
                field: 'Provider',
                headerAlign: 'center',
                flex: 1.5,
                renderCell: (params) => <Box className="text-ellipsis">{params.value}</Box>,
            },
            { field: 'Medicare (4digit)', headerAlign: 'center', align: 'center', flex: 1 },
        ],
        rows: DataGridOptionData.rows,
    };

    function getAutoRowHeight(params) {
        return 'auto';
    }

    const handleSelectionChange = (newRowSelectionModel: SetStateAction<any[]>) => {
        setRowSelectionModel(newRowSelectionModel);
    };

    useEffect(() => {
        setTitle('All Patients');
    }, [setTitle]);

    return (
        <section className="content">
            <header className="cont-head type-grey">
            </header>
            <Box className="cont-body">
                <Grid container spacing={1} sx={{ mb: 1 }} alignItems="flex-end">
                    <Grid item xs={1}>
                        <InputLabel variant="standard" size="small">
                            Patient Name
                        </InputLabel>
                        <TextField
                            variant="standard"
                            placeholder="Last, First"
                            size="small"
                            className="placeholder-visible"
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <InputFieldSelect />
                    </Grid>
                    <Grid item xs={1}>
                        <TextField
                            fullWidth
                            placeholder="Medicare No."
                            size="small"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <Search />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>
                    <Grid item xs={1}>
                        <TextField
                            fullWidth
                            placeholder="ICD-10s"
                            size="small"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <Search />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>
                    <Grid item>
                        <Select moduleName="PPO" size="small" />
                    </Grid>
                    <Grid item>
                        <IconButton aria-label="filter" color="secondary">
                            <FilterAltOff />
                        </IconButton>
                    </Grid>
                    <Grid item sx={{ ml: 'auto' }}>
                        <IconButton size="medium" color="primary" className="mui-icon-square">
                            <AddIcon />
                        </IconButton>
                        <IconButton>
                            <DeleteIcon color="secondary" />
                        </IconButton>
                    </Grid>
                </Grid>
                <Box sx={{ height: 650, width: '100%' }}>
                    <DataGridPro
                        {...data}
                        getRowHeight={getAutoRowHeight}
                        checkboxSelection
                        onRowSelectionModelChange={handleSelectionChange}
                        rowSelectionModel={rowSelectionModel}
                    />
                </Box>
            </Box>
        </section>
    );
};
