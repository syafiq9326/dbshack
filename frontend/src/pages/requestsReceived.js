import React, { useEffect, useState } from 'react';

const RequestsReceived = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    // Fetch data from the backend
    fetch('/api/requests/received', {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    })
      .then((response) => response.json())
      .then((data) => setRequests(data))
      .catch((error) => console.error('Error fetching requests:', error));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Requests Received</h2>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-300 px-4 py-2">Request Date</th>
            <th className="border border-gray-300 px-4 py-2">Requestor Company Name</th>
            <th className="border border-gray-300 px-4 py-2">Carbon Price</th>
            <th className="border border-gray-300 px-4 py-2">Carbon Quantity</th>
            <th className="border border-gray-300 px-4 py-2">Request Reason</th>
            <th className="border border-gray-300 px-4 py-2">Request Type</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((req) => (
            <tr key={req.requestId} className="hover:bg-gray-200">
              <td className="border border-gray-300 px-4 py-2">{new Date(req.requestDate).toLocaleString()}</td>
              <td className="border border-gray-300 px-4 py-2">{req.requestorCompanyName}</td>
              <td className="border border-gray-300 px-4 py-2">${req.carbonUnitPrice.toFixed(2)}</td>
              <td className="border border-gray-300 px-4 py-2">{req.carbonQuantity}</td>
              <td className="border border-gray-300 px-4 py-2">{req.requestReason}</td>
              <td className="border border-gray-300 px-4 py-2">{req.requestType}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RequestsReceived;
