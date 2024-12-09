import { Container, Tabs, Tab, Box } from '@mui/material';
import { useState } from 'react';
import UserList from './components/UserManagement/UserList';
import RoleList from './components/RoleManagement/RoleList';
import PermissionList from './components/RoleManagement/PermissionList';
import { fetchUsers } from './api/mockApi';

const App = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [users, setUsers] = useState(fetchUsers());

  const permissions = ['Read', 'Write', 'Delete']; // Example permissions

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handlePermissionChange = (userId, newPermissions) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) => (user.id === userId ? { ...user, permissions: newPermissions } : user))
    );
  };

  return (
    <Container>
      <Box sx={{ marginTop: 4 }}>
        <Tabs value={activeTab} onChange={handleTabChange} centered>
          <Tab label="User Management" />
          <Tab label="Role Management" />
          <Tab label="Permissions" />
        </Tabs>
        <Box sx={{ marginTop: 4 }}>
          {activeTab === 0 && <UserList />}
          {activeTab === 1 && <RoleList />}
          {activeTab === 2 && <PermissionList users={users} permissions={permissions} onPermissionChange={handlePermissionChange} />}
        </Box>
      </Box>
    </Container>
  );
};

export default App;
