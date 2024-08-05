import { DataGridPro as MuiDataGridPro } from '@mui/x-data-grid-pro';

export const DataGridPro = (props) => {
    return (
        <MuiDataGridPro
            {...props}
            pagination={true}
            initialState={{
                ...props.initialState,
                pagination: { paginationModel: { pageSize: 25 } },
            }}
            pageSizeOptions={[10, 25, 50, 100]}
            slotProps={{ pagination: { labelRowsPerPage: 'show' } }}
        />
    );
};
