import { useState } from 'react';
import NewUser from './components/user/NewUser';
import UserList from './components/user/UserList';

function App() {
  const [users, setUsers] = useState([]);

  const handleAddUser = (username, age) => {
    const newUser = { id: Math.random().toString(), username, age };
    setUsers(prevUsers => [...prevUsers, newUser]);
  };

  return (
    <div>
      <NewUser onAddUser={handleAddUser} />
      <UserList items={users} />
    </div>
  );
}

export default App;
