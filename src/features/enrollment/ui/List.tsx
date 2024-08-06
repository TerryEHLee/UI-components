import { Create, UploadFile } from '@mui/icons-material';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import { Box, Chip, Grid, Link, Typography } from '@mui/material';
import { DataGridOptionData, DataGridPro, IconButton, Select } from '@/shared/ui';

export const EnrollmentList = ({ handleToggle }) => {
    function getAutoRowHeight(params) {
        // 셀 내용에 따라 자동으로 높이 조정
        return 'auto';
    }

    function getDetailPanelHeight() {
        return 'auto';
    }

    const data = {
        columns: [
            { field: 'No', width: '60', headerAlign: 'center', align: 'center' },
            {
                field: 'RPM Start Date',
                width: 110,
                headerAlign: 'center',
                align: 'center',
                renderHeader: () => (
                    <Box sx={{ width: '100%' }} className="render-header" textAlign="center">
                        RPM
                        <br />
                        Start Date
                    </Box>
                ),
                renderCell: (params) => (
                    <Link
                        component="button"
                        underline="always"
                        color="text.dark"
                        onClick={handleToggle('isStartDateModalOpen')}
                    >
                        {params.value}
                    </Link>
                ),
            },
            {
                field: 'Name',
                width: 150,
                flex: 1,
                renderCell: (params) => (
                    <Box className="flex-column">
                        <Link
                            component="button"
                            underline="always"
                            color="text.dark"
                            sx={{ fontWeight: 700 }}
                            onClick={handleToggle('isNameModalOpen')}
                        >
                            ABCDEFG, ABCDEFG, ABCDEFG
                        </Link>
                        <Link
                            component="button"
                            underline="always"
                            color="text.dark"
                            onClick={handleToggle('isNameModalOpen')}
                        >
                            F 09/09/1965
                        </Link>
                        <Typography>BP, BG, SpO₂, Temp., WT</Typography>
                    </Box>
                ),
            },
            { field: 'LTC', width: 60 },
            {
                field: 'Phone',
                headerName: 'Phone #',
                headerAlign: 'center',
                align: 'center',
            },
            {
                field: 'Service Type',
                width: 120,
                headerAlign: 'center',
                align: 'center',
                renderCell: (params) => (
                    <Link component="button" underline="always" onClick={handleToggle('isServiceTypeModalOpen')}>
                        {params.value}
                        <Create />
                    </Link>
                ),
            },
            { field: 'RPM Time', headerAlign: 'center', align: 'center' },
            {
                field: 'Last RPM Monitoring',
                headerAlign: 'center',
                align: 'center',
                renderHeader: () => (
                    <Box sx={{ width: '100%' }} className="render-header" textAlign="center">
                        Last RPM
                        <br />
                        Monitoring
                    </Box>
                ),
            },
            {
                field: 'Alerts',
                headerName: 'Last 7d Alerts',
                headerAlign: 'center',
                align: 'center',
                renderHeader: () => (
                    <Box sx={{ width: '100%' }} className="render-header" textAlign="center">
                        Last 7d
                        <br />
                        Alerts
                    </Box>
                ),
                renderCell: (params) => (
                    <Link component="button" underline="hover" onClick={handleToggle('isAlertsModalOpen')}>
                        {params.value}
                    </Link>
                ),
            },
            {
                field: 'Last Measurement',
                width: 120,
                headerAlign: 'center',
                align: 'center',
                renderHeader: () => (
                    <Box sx={{ width: '100%' }} className="render-header" textAlign="center">
                        Last
                        <br />
                        Measurement
                    </Box>
                ),
            },
            {
                field: 'Status',
                headerAlign: 'center',
                align: 'center',
                renderCell: (params) => <Select moduleName="Status" variant="standard" />,
            },
        ],
        rows: DataGridOptionData.rows,
    };

    return (
        <DataGridPro
            {...data}
            getRowHeight={getAutoRowHeight}
            getDetailPanelContent={() => (
                <Box className="detail-expanded">
                    <Grid container className="detail-row">
                        <Grid item container className="detail-title">
                            <Typography>Patient Consent</Typography>
                        </Grid>
                        <Grid item className="detail-content">
                            <RecordVoiceOverIcon sx={{ fontSize: '1rem', mr: 0.5 }} color="primary" />
                            <Chip
                                component="button"
                                label="Signed"
                                size="small"
                                color="primary"
                                onClick={handleToggle('isPatientConsentModalOpen')}
                            />
                        </Grid>
                    </Grid>
                    <Grid container className="detail-row">
                        <Grid item container className="detail-title">
                            <Typography>Eligibility Review</Typography>
                        </Grid>
                        <Grid item className="detail-content">
                            <Typography>In review</Typography>
                            <IconButton size="small" onClick={handleToggle('isEligibilityReviewVerifiedModalOpen')}>
                                <UploadFile />
                            </IconButton>
                        </Grid>
                    </Grid>
                    <Grid container className="detail-row">
                        <Grid item container className="detail-title">
                            <Typography>Upcoming 99454 Date</Typography>
                        </Grid>
                        <Grid item className="detail-content">
                            <Typography>04/24/2024</Typography>
                        </Grid>
                    </Grid>
                    <Grid container className="detail-row">
                        <Grid item container className="detail-title">
                            <Typography>Measurement Days</Typography>
                        </Grid>
                        <Grid item className="detail-content">
                            <Typography>1/19</Typography>
                        </Grid>
                    </Grid>
                    <Grid container className="detail-row">
                        <Grid item container className="detail-title">
                            <Typography>Provider</Typography>
                        </Grid>
                        <Grid item className="detail-content">
                            <Typography>Lee, Doctor</Typography>
                        </Grid>
                    </Grid>
                    <Grid container className="detail-row">
                        <Grid item container className="detail-title">
                            <Typography>EHR ID</Typography>
                        </Grid>
                        <Grid item className="detail-content">
                            <Typography>HCN0953</Typography>
                        </Grid>
                    </Grid>
                    <Grid container className="detail-row">
                        <Grid item container className="detail-title">
                            <Typography>Billable Option</Typography>
                        </Grid>
                        <Grid item className="detail-content">
                            <Typography>PPO</Typography>
                        </Grid>
                    </Grid>
                </Box>
            )}
            getDetailPanelHeight={getDetailPanelHeight}
        />
    );
};
