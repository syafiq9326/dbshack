import Paper from "@mui/material/Paper";
import { DataGrid } from "@mui/x-data-grid";
import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";

// Define columns for the DataGrid
const columns = [
  { field: "requestDate", headerName: "Request Date", width: 150 },
  { field: "companyName", headerName: "Requestor Company", width: 150 },
  { field: "price", headerName: "Carbon Price (SGD/Tonnes)", width: 200 },
  { field: "quantity", headerName: "Carbon Quantity", width: 150 },
  { field: "reason", headerName: "Request Reason", width: 200 },
  { field: "type", headerName: "Request Type", width: 150 },
  {
    field: "actions",
    headerName: "Actions",
    width: 200,
    sortable: false,
    renderCell: (params) => (
      <>
        <Button
          variant="contained"
          color="success"
          size="small"
          style={{ marginRight: 10 }}
          onClick={() => handleAction("accept", params.row.id)}
        >
          Accept
        </Button>
        <Button
          variant="contained"
          color="error"
          size="small"
          onClick={() => handleAction("reject", params.row.id)}
        >
          Reject
        </Button>
      </>
    ),
  },
];

// Define the action handler
const handleAction = (action, id) => {
  console.log(`${action} request with ID: ${id}`);
  // Add logic for handling Accept/Reject (e.g., API calls)
};

const RequestsTable = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    // Mock backend data (replace with actual API calls)
    const mockData = [
      {
        id: 1,
        requestDate: "2025-01-01",
        companyName: "TechTrek 2025 Pte Ltd",
        price: 500.25,
        quantity: 3.5,
        reason: "Offset carbon footprint",
        type: "Sell",
      },
      {
        id: 2,
        requestDate: "2025-01-02",
        companyName: "Green Future Ltd",
        price: 450,
        quantity: 2.0,
        reason: "Carbon reduction initiative",
        type: "Buy",
      },
    ];

    setRows(mockData);
  }, []);

  return (
    <Paper sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
  );
};

export default RequestsTable;
