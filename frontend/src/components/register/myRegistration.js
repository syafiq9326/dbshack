import React, { useEffect, useState } from "react";
import { TextField, Button, Paper, Box, Typography, Select, MenuItem } from "@mui/material";
import { axiosInstance } from "../../services/userServices";
import {useNavigate} from 'react-router-dom'
 
export default function RegisterPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    companyId: "",
    name: "",
  });

  const [companiesArr, setCompaniesArr] = useState([]);
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    // sending data to an API?
    const response = await axiosInstance.post("/users/register",formData)
    if(response.status === 200){
      navigate("/")
    }else{
      console.error("Error registering")
    }
  };

  const fetchCompanyIds = async () => {
    const response = await axiosInstance.get("/companies");
    if (response.status === 200) {
      setCompaniesArr(response.data.companyAccounts); // populate companiesArr
    }
  };

  useEffect(() => {
    fetchCompanyIds();
  }, []);

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
        <Select
          labelId="company-id-label"
          id="company-id"
          name="companyId"
          value={formData.companyId}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        >
          <MenuItem value="">
            <em>Select Company</em>
          </MenuItem>
          {companiesArr?.map((company) => (
            <MenuItem key={company._id} value={company._id}>
              {company.name}
            </MenuItem>
          ))}
        </Select>
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