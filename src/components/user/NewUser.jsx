import { useRef, useState } from 'react';
import Button from '../ui/Button';
import Card from '../ui/Card';
import ErrorModal from '../ui/ErrorModal';
import clss from './NewUser.module.css';

const NewUser = ({ onAddUser }) => {
  const usernameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState(null);

  const handleAddUser = ev => {
    ev.preventDefault();

    const username = usernameInputRef.current.value;
    const age = ageInputRef.current.value;

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
    usernameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };

  const handleCloseModal = () => {
    setError(null);
  };

  return (
    <>
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
          <input ref={usernameInputRef} type="text" id="username" />
          <label htmlFor="age">Age (years)</label>
          <input ref={ageInputRef} type="number" id="age" />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default NewUser;
