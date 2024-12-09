import { Modal, Box, TextField, Button, Select, MenuItem, InputLabel, FormControl, Checkbox, FormControlLabel } from '@mui/material';
import { useState } from 'react';
import { addUser } from '../../api/mockApi';

const AddUserModal = ({ open, onClose }) => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    role: '',
    permissions: [],  // Array to hold selected permissions
    status: 'Active', // Default status
  });

  // Handle input change for text fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  // Handle checkbox change for permissions
  const handlePermissionChange = (e) => {
    const { value, checked } = e.target;
    setUserData((prevState) => {
      const newPermissions = checked
        ? [...prevState.permissions, value]
        : prevState.permissions.filter(permission => permission !== value);
      return { ...prevState, permissions: newPermissions };
    });
  };

  // Handle adding the user
  const handleAddUser = () => {
    addUser(userData);  // Call the API to add user
    onClose();  // Close the modal after adding user
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={{ padding: 4, background: 'white', margin: 'auto', width: 300 }}>
        {/* Name Input */}
        <TextField
          label="Name"
          name="name"
          value={userData.name}
          onChange={handleInputChange}
          fullWidth
          sx={{ marginBottom: 2 }}
        />
        
        {/* Email Input */}
        <TextField
          label="Email"
          name="email"
          value={userData.email}
          onChange={handleInputChange}
          fullWidth
          sx={{ marginBottom: 2 }}
        />
        
        {/* Role Dropdown */}
        <FormControl fullWidth sx={{ marginBottom: 2 }}>
          <InputLabel>Role</InputLabel>
          <Select
            name="role"
            value={userData.role}
            onChange={handleInputChange}
            label="Role"
            >
            <MenuItem value="Manager">Manager</MenuItem>
            <MenuItem value="Admin">Admin</MenuItem>
            <MenuItem value="SDE">SDE</MenuItem>
            <MenuItem value="Intern">Intern</MenuItem>
            <MenuItem value="Product">Product</MenuItem>
          </Select>
        </FormControl>

        {/* Permission Checkboxes */}
        <FormControl component="fieldset" sx={{ marginBottom: 2 }}>
              {/* <InputLabel>Role</InputLabel> */}
              {/* Permissions */}
          <FormControlLabel
            control={<Checkbox
              value="Read"
              checked={userData.permissions.includes('Read')}
              onChange={handlePermissionChange}
            />}
            label="Read"
          />
          <FormControlLabel
            control={<Checkbox
              value="Write"
              checked={userData.permissions.includes('Write')}
              onChange={handlePermissionChange}
            />}
            label="Write"
          />
          <FormControlLabel
            control={<Checkbox
              value="Execute"
              checked={userData.permissions.includes('Execute')}
              onChange={handlePermissionChange}
            />}
            label="Execute"
          />
        </FormControl>

        {/* Status Dropdown */}
        <FormControl fullWidth sx={{ marginBottom: 2 }}>
          <InputLabel>Status</InputLabel>
          <Select
            name="status"
            value={userData.status}
            onChange={handleInputChange}
            label="Status"
          >
            <MenuItem value="Active">Active</MenuItem>
            <MenuItem value="Inactive">Inactive</MenuItem>
          </Select>
        </FormControl>

        {/* Add User Button */}
        <Button variant="contained" fullWidth onClick={handleAddUser}>
          Add User
        </Button>
      </Box>
    </Modal>
  );
};

export default AddUserModal;
