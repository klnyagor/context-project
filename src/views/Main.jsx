import { Button, Collapse, Container } from 'react-bootstrap';
import UserTable from './components/UserTable';
import { useUser } from '../contexts/UserContext';
import { useState } from 'react';

const Main = () => {
  let { listUsers } = useUser();
  let [open, setOpen] = useState(false);

  const handleListUser = () => {
    // api
    //   .get('users/')
    //   .then((res) => {
    //     console.log(res.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    listUsers();
    setOpen(!open);
  };
  return (
    <>
      {/* <Button variant="primary" onClick={handleClickShow}>
        Mudar show
      </Button> */}
      <Button
        variant="success"
        onClick={() => {
          handleListUser();
          console.log('clicou listar');
        }}
      >
        Listar Usuários
      </Button>
      <Button
        variant="warning"
        onClick={() => {
          console.log('clicou cadastrar');
        }}
      >
        Cadastrar Usuário
      </Button>
      <> Formulário </>

      <Collapse in={open}>
        <Container id="listar-usuarios" className="mt-3">
          <UserTable />
        </Container>
      </Collapse>
    </>
  );
};

export default Main;
