import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';


const handleDelete = (id) => {
  console.log(id);
}
const new_window = (id) => {
  window.open("/instructors/about_instructor/"+id , "application_viewing_window", "height=400,width=800", "_blank");
}

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'DOB',
    headerName: 'DOB',
    type: 'number',
    width: 110,
    editable: true,
  },

  {
    field: "action",
    headerName: "Action",
    width: 150,
    renderCell: (params) => {
      return (
        <>
          <DeleteOutline
            className="userListDelete"
            onClick={() => handleDelete(params.row.id)}
          />
        </>
      );
    },
  },
  {
    field: "Overview",
    headerName: "Overview",
    width: 150,
    renderCell: (params) => {
        return (
            <>
                <span style={{ cursor: "pointer" }} onClick={() => { new_window(params.row.id) }}>See</span>
            </>
        );
    },
},

];

const rows = [
  { id: 1, lastName: 'Snow jhjhi', firstName: 'Jon', DOB: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', DOB: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Cersei', DOB: 42 },
  { id: 4, lastName: 'Lannister', firstName: 'Cersei', DOB: 42 },
  { id: 5, lastName: 'Lannister', firstName: 'Cersei', DOB: 42 },
  { id: 6, lastName: 'Lannister', firstName: 'Cersei', DOB: 42 },
  { id: 7, lastName: 'Lannister', firstName: 'Cersei', DOB: 42 },
  { id: 8, lastName: 'Lannister', firstName: 'Cersei', DOB: 42 },
  { id: 9, lastName: 'Lannister', firstName: 'Cersei', DOB: 42 },
  { id: 10, lastName: 'Lannister', firstName: 'Cersei', DOB: 42 },
  { id: 11, lastName: 'Lannister', firstName: 'Cersei', DOB: 42 },

];

export default function Instructors_manage() {
  return (
    <Box sx={{ height: 600, width: '100%' }}>
      <h1>Instructors Management</h1>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 7,
            },
          },
        }}
        pageSizeOptions={[7]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
