import { useState } from 'react';
import Button from '../ui/Button';
import Card from '../ui/Card';
import ErrorModal from '../ui/ErrorModal';
import clss from './NewUser.module.css';

const NewUser = ({ onAddUser }) => {
  const [username, setUserName] = useState('');
  const [age, setAge] = useState('');
  const [error, setError] = useState(null);

  const handleAddUser = ev => {
    ev.preventDefault();
    if (!username.trim() || !age.trim()) {
      return setError({
        title: 'Invalid input',
        message: (
          <>
            <em>Username</em> and <em>age</em> must be non-empty values.
          </>
        ),
      });
    }
    if (+age < 1) {
      return setError({
        title: 'Invalid Age',
        message: (
          <>
            <em>Age</em> must be greater than 0.
          </>
        ),
      });
    }
    onAddUser(username, age);
    setUserName('');
    setAge('');
  };

  const handleUsernameChange = ev => {
    setUserName(ev.target.value);
  };

  const handleAgeChange = ev => {
    setAge(ev.target.value);
  };

  const handleCloseModal = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onClose={handleCloseModal}
        />
      )}
      <Card className={clss.input}>
        <form onSubmit={handleAddUser}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
          <label htmlFor="age">Age (years)</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={handleAgeChange}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default NewUser;
