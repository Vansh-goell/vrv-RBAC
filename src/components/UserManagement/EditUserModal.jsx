import { Modal, Box, TextField, Button } from '@mui/material';
import { useState } from 'react';
import { updateUser } from '../../api/mockApi';

const EditUserModal = ({ data, onClose }) => {
  const [name, setName] = useState(data?.name || '');
  const [email, setEmail] = useState(data?.email || '');
  const [role, setRole] = useState(data?.role || '');

  const handleSave = () => {
    if (data?.id) {
      updateUser(data.id, { name, email, role });
    }
    onClose();
  };

  return (
    <Modal open={!!data} onClose={onClose}>
      <Box sx={{ padding: 4, background: 'white', margin: 'auto', width: 300 }}>
        <TextField
          label="Name"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Email"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Role"
          fullWidth
          value={role}
          onChange={(e) => setRole(e.target.value)}
          sx={{ marginBottom: 2 }}
        />
        <Button variant="contained" fullWidth onClick={handleSave}>
          Save
        </Button>
      </Box>
    </Modal>
  );
};

export default EditUserModal;
