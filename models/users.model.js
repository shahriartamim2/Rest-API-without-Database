import { v4 as uuidv4 } from 'uuid';


let users = [
    { id: uuidv4(), name: 'Alice', email: 'alice@example.com' },
    { id: uuidv4(), name: 'Bob', email: 'bob@example.com' },
    { id: uuidv4(), name: 'Charlie', email: 'charlie@example.com' }
];

export default users;