import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
    isAgent: true,
  },
  {
    name: 'John Doe',
    email: 'john@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: false,
    isAgent: false,
  },
  {
    name: 'Jane Doe',
    email: 'jane@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: false,
    isAgent: true,
  },
];


export default users;
