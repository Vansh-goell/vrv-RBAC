import { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Paper } from '@mui/material';
import AddUserModal from './AddUserModal';
import DeleteUserModal from './DeleteUserModal';
import { fetchUsers } from '../../api/mockApi';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [deleteModalData, setDeleteModalData] = useState(null);

  useEffect(() => {
    setUsers(fetchUsers());
  }, []);

  return (
    <div>
      <Button variant="contained" onClick={() => setAddModalOpen(true)}>
        Add User</Button>
      <TableContainer component={Paper} sx={{ marginTop: 4 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Permissions</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
                {/* Displaying permissions as a comma-separated string */}
                <TableCell>{user.permissions.join(', ')}</TableCell>
                <TableCell>{user.status}</TableCell>
                <TableCell>
                  <Button onClick={() => setDeleteModalData(user)}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <AddUserModal open={addModalOpen} onClose={() => setAddModalOpen(false)} />
      <DeleteUserModal data={deleteModalData} onClose={() => setDeleteModalData(null)} />
    </div>
  );
};

export default UserList;
