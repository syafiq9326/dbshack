import React, { useEffect, useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Swal from 'sweetalert2'; // For alerts

const RequestsReceived = () => {
  const [requests, setRequests] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);

  // Simulated backend data (you can replace this with API calls later)
  useEffect(() => {
    const mockData = [
      {
        id: 1,
        requestDate: '2025-01-04T10:00:00',
        requestorCompanyName: 'TechTrek 2025 Pte Ltd',
        carbonUnitPrice: 500.25,
        carbonQuantity: 3.5,
        requestReason: 'Offset carbon footprint',
        requestType: 'Sell',
      },
      {
        id: 2,
        requestDate: '2025-01-03T09:30:00',
        requestorCompanyName: 'Green Future Ltd',
        carbonUnitPrice: 450.0,
        carbonQuantity: 2.0,
        requestReason: 'Carbon reduction initiative',
        requestType: 'Buy',
      },
    ];
    setRequests(mockData);
    checkOverdueRequests(mockData); // Check for overdue requests
  }, []);

  // Check for overdue requests and display alerts
  const checkOverdueRequests = (requests) => {
    const overdueRequests = requests.filter((req) => {
      const requestDate = new Date(req.requestDate);
      const now = new Date();
      return now - requestDate > 7 * 24 * 60 * 60 * 1000; // Overdue after 7 days
    });

    if (overdueRequests.length > 0) {
      Swal.fire({
        title: 'Overdue Requests Alert!',
        text: `${overdueRequests.length} request(s) are overdue. Please review them.`,
        icon: 'warning',
        confirmButtonText: 'OK',
      });
    }
  };

  // Handle Accept/Reject actions
  const handleSingleAction = (action, requestId) => {
    Swal.fire({
      title: `${action === 'accept' ? 'Accept' : 'Reject'} Request?`,
      text: `Are you sure you want to ${action} request ${requestId}?`,
      icon: action === 'accept' ? 'success' : 'error',
      showCancelButton: true,
      confirmButtonText: 'Yes',
    }).then((result) => {
      if (result.isConfirmed) {
        // Simulate action
        console.log(`${action} request ${requestId}`);
        // Update UI (you can replace this with actual API calls)
        setRequests((prev) =>
          prev.filter((req) => req.id !== requestId)
        );
      }
    });
  };

  // Handle Bulk Accept/Reject
  const handleBulkAction = (action) => {
    Swal.fire({
      title: `Bulk ${action === 'accept' ? 'Accept' : 'Reject'} Requests?`,
      text: `Are you sure you want to ${action} these requests?`,
      icon: action === 'accept' ? 'success' : 'error',
      showCancelButton: true,
      confirmButtonText: 'Yes',
    }).then((result) => {
      if (result.isConfirmed) {
        // Simulate bulk action
        console.log(`${action} requests:`, selectedRows);
        // Update UI
        setRequests((prev) =>
          prev.filter((req) => !selectedRows.includes(req.id))
        );
        setSelectedRows([]); // Clear selection
      }
    });
  };

  // DataGrid column definitions
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'requestDate', headerName: 'Request Date', width: 150, valueGetter: ({ value }) => new Date(value).toLocaleString() },
    { field: 'requestorCompanyName', headerName: 'Requestor Company', width: 200 },
    { field: 'carbonUnitPrice', headerName: 'Carbon Price (SGD/Tonnes)', width: 180 },
    { field: 'carbonQuantity', headerName: 'Carbon Quantity', width: 150 },
    { field: 'requestReason', headerName: 'Request Reason', width: 200 },
    { field: 'requestType', headerName: 'Request Type', width: 130 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 200,
      sortable: false,
      renderCell: (params) => (
        <>
          <Button
            variant="contained"
            color="success"
            size="small"
            onClick={() => handleSingleAction('accept', params.row.id)}
            style={{ marginRight: 10 }}
          >
            Accept
          </Button>
          <Button
            variant="contained"
            color="error"
            size="small"
            onClick={() => handleSingleAction('reject', params.row.id)}
          >
            Reject
          </Button>
        </>
      ),
    },
  ];

  // Map requests to rows for DataGrid
  const rows = requests.map((req) => ({
    id: req.id,
    requestDate: req.requestDate,
    requestorCompanyName: req.requestorCompanyName,
    carbonUnitPrice: req.carbonUnitPrice,
    carbonQuantity: req.carbonQuantity,
    requestReason: req.requestReason,
    requestType: req.requestType,
  }));

  return (
    <Paper sx={{ height: 500, width: '100%', padding: 2 }}>
      <h2 className="text-2xl font-bold mb-4">Requests Received</h2>
      <div style={{ marginBottom: 10 }}>
        <Button
          variant="contained"
          color="success"
          onClick={() => handleBulkAction('accept')}
          disabled={selectedRows.length === 0}
          style={{ marginRight: 10 }}
        >
          Bulk Accept
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={() => handleBulkAction('reject')}
          disabled={selectedRows.length === 0}
        >
          Bulk Reject
        </Button>
      </div>
      <DataGrid
        rows={rows}
        columns={columns}
        checkboxSelection
        onRowSelectionModelChange={(ids) => setSelectedRows(ids)}
        sx={{ border: 0 }}
      />
    </Paper>
  );
};

export default RequestsReceived;
