import Card from '../ui/Card';
import clss from './UserList.module.css';

const UserList = ({ items }) => {
  let users = <h2>No users.</h2>;

  if (items.length) {
    users = (
      <ul>
        {items.map(({ id, username, age }) => (
          <li key={id}>
            {username} ({age} years old)
          </li>
        ))}
      </ul>
    );
  }

  return <Card className={clss.users}>{users}</Card>;
};

export default UserList;
