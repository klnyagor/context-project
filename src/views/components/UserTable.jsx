import { Table } from 'react-bootstrap';
import { useUser } from '../../contexts/UserContext';

const UserTable = () => {
  let { users } = useUser();
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, i) => {
          return (
            <tr key={i}>
              <td>{user.id}</td>
              <td>{user.nome}</td>
              <td>{user.email}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default UserTable;
