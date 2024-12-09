import { Modal, Box, Typography, Button } from '@mui/material';
import { deleteUser } from '../../api/mockApi';

const DeleteUserModal = ({ data, onClose }) => {
  const handleDelete = () => {
    if (data?.id) {
      deleteUser(data.id);
    }
    onClose();
  };

  return (
    <Modal open={!!data} onClose={onClose}>
      <Box sx={{ padding: 4, background: 'white', margin: 'auto', width: 300, textAlign: 'center' }}>
        <Typography variant="h6" gutterBottom>
          Are you sure you want to delete this user?
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 2 }}>
          {data?.name} ({data?.email})
        </Typography>
        <Button variant="contained" color="error" onClick={handleDelete} sx={{ marginRight: 2 }}>
          Delete
        </Button>
        <Button variant="outlined" onClick={onClose}>
          Cancel
        </Button>
      </Box>
    </Modal>
  );
};

export default DeleteUserModal;
