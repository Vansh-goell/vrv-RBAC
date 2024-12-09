let users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Manager', permissions: ['Read', 'Write'], status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Admin', permissions: ['Read'], status: 'Inactive' },
    // Add more users here
  ];
  
  // Fetch all users
  export const fetchUsers = () => {
    return users;
  };
  
  // Add a new user
  export const addUser = (userData) => {
    const newUser = {
      id: users.length + 1, // Generate a new ID for the user
      name: userData.name,
      email: userData.email,
      role: userData.role,
      permissions: userData.permissions,
      status: userData.status,
    };
    users.push(newUser);
  };
  
  // Remove a user by ID
  export const deleteUser = (userId) => {
    users = users.filter((user) => user.id !== userId);
  };

export const updateUserPermissions = (userId, updatedPermissions) => {
    users = users.map((user) =>
      user.id === userId ? { ...user, permissions: updatedPermissions } : user
    );
  };
  
  
  // Fetch roles (used in Role Management)
  export const fetchRoles = () => {
    return users.map(({ id, name, role, status }) => ({ id, name, role, status }));
  };
  
  // Update role and status for a user
  export const updateRole = (id, updatedFields) => {
    users = users.map((user) =>
      user.id === id ? { ...user, ...updatedFields } : user
    );
  };
  