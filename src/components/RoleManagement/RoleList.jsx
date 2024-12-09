import React, { useState, useEffect } from 'react';
import { fetchRoles, updateRole } from '../../api/mockApi'; // Fetch & update mock API methods
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Select,
  MenuItem,
  TableContainer,
} from '@mui/material';

const RoleList = () => {
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    // Fetch roles when component mounts
    setRoles(fetchRoles());
  }, []);

  // Handle changes in the Role dropdown
  const handleRoleChange = (id, newRole) => {
    setRoles((prevRoles) =>
      prevRoles.map((role) =>
        role.id === id ? { ...role, role: newRole } : role
      )
    );
    updateRole(id, { role: newRole }); // Mock API update
  };

  // Handle changes in the Status dropdown
  const handleStatusChange = (id, newStatus) => {
    setRoles((prevRoles) =>
      prevRoles.map((role) =>
        role.id === id ? { ...role, status: newStatus } : role
      )
    );
    updateRole(id, { status: newStatus }); // Mock API update
  };

  return (
    <TableContainer component={Paper} sx={{ marginTop: 4 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {roles.map((role) => (
            <TableRow key={role.id}>
              <TableCell>{role.id}</TableCell>
              <TableCell>{role.name}</TableCell>
              <TableCell>
                <Select
                  value={role.role}
                  onChange={(e) => handleRoleChange(role.id, e.target.value)}
                  fullWidth
                >
                  <MenuItem value="Manager">Manager</MenuItem>
                  <MenuItem value="Admin">Admin</MenuItem>
                  <MenuItem value="SDE">SDE</MenuItem>
                  <MenuItem value="Intern">Intern</MenuItem>
                  <MenuItem value="Product">Product</MenuItem>
                </Select>
              </TableCell>
              <TableCell>
                <Select
                  value={role.status}
                  onChange={(e) => handleStatusChange(role.id, e.target.value)}
                  fullWidth
                >
                  <MenuItem value="Active">Active</MenuItem>
                  <MenuItem value="Inactive">Inactive</MenuItem>
                </Select>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default RoleList;
