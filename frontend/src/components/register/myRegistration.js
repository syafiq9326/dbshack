import React, { useState } from "react";
import { TextField, Button, Paper, Box, Typography } from "@mui/material";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    companyID: "",
    name: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // sending data to an API?
    console.log(formData);
  };

  return (
    <Paper sx={{ padding: 3, maxWidth: 400, margin: "auto", mt: 5 }}>
      <Typography variant="h5" align="center" gutterBottom>
        Register
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate autoComplete="off">
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <TextField
          label="Password"
          variant="outlined"
          fullWidth
          margin="normal"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <TextField
          label="Company ID"
          variant="outlined"
          fullWidth
          margin="normal"
          name="companyID"
          value={formData.companyID}
          onChange={handleChange}
          required
        />
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          margin="normal"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
          Register
        </Button>
      </Box>
    </Paper>
  );
}
