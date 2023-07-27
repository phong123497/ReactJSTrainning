import { Box, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { Stack, Pagination } from "@mui/x-data-grid";
import { mockDataContacts } from "../../data/mockData";

import Header from "../../components/Header";

const CustomFooter = () => {
  return (
    <div
      style={{
        textAlign: "left",
        padding: "8px",
        backgroundColor: "#f0f0f0"
      }}
    >
      Custom Footer Message
    </div>
  );
};

const Contact = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "registrarId", headerName: "registrarId" },

    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell"
    },
    { field: "age", headerName: "Age", type: "number", headerAlign: "right" },
    { field: "phone", headerName: "phone Number", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "address", headerName: "Address", flex: 1 },
    { field: "city", headerName: "City", flex: 1 },
    { field: "zipCode", headerName: "ZipCode", flex: 1 }
  ];
  return (
    <Box m="20px">
      <Header title="CONTACTS" subtitle="List of Contact" />
      <Box
        m="40px 0 0 0 "
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none"
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none"
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300]
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none"
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400]
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700]
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `&{color.grey[100]! important}`
          }
        }}
      >
        <DataGrid
          rows={mockDataContacts}
          columns={columns}
          slots={{ toolbar: GridToolbar }}
          //   pageSizeOptions={[5, 10, 25]}
        ></DataGrid>
        <></>
      </Box>
    </Box>
  );
};

export default Contact;
