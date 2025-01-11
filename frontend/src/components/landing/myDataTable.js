import Paper from "@mui/material/Paper";
import { DataGrid } from "@mui/x-data-grid";
import * as React from "react";
const columns = [
  { field: "companyName", headerName: "Company Name", width: 150 },
  {
    field: "price",
    headerName: "Carbon Price (SgD/ Tonnes)",
    width: 200,

    sortable: true,
  },
  { field: "qty", headerName: "Carbon Quantity", width: 130 },
  {
    field: "reason",
    headerName: "Request Reason",
    width: 150,
  },
  {
    field: "requestType",
    headerName: "Request Type",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
  },
];

const rows = [
  {
    id: 1,
    companyName: "company1",
    price: 120,
    qty: 150,
    reason: "random reason",
    requestType: "buy",
  },
  {
    id: 2,
    companyName: "company1",
    price: 220,
    qty: 150,
    reason: "random reason",
    requestType: "buy",
  },
  {
    id: 3,
    companyName: "company1",
    price: 420,
    qty: 150,
    reason: "random reason",
    requestType: "buy",
  },
  {
    id: 4,
    companyName: "company1",
    price: 120,
    qty: 150,
    reason: "random reason",
    requestType: "buy",
  },
  {
    id: 5,
    companyName: "company1",
    price: 120,
    qty: 150,
    reason: "random reason",
    requestType: "buy",
  },
];

const paginationModel = { page: 0, pageSize: 5 };

export default function MyDataTable() {
  return (
    <Paper sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: { paginationModel },
          sorting: {
            sortModel: [{ field: "price", sort: "asc" }],
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
  );
}
