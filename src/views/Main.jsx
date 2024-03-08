import { Button, Collapse, Container } from 'react-bootstrap';
import UserTable from './components/UserTable';
import { useUser } from '../contexts/UserContext';
import { useState } from 'react';
import UserForm from './components/UserForm';

const Main = () => {
  let { listUsers, handleModal } = useUser();
  let [open, setOpen] = useState(false);

  const handleClickListar = () => {
    listUsers();
    setOpen(!open);
    // console.log('clicou listar');
  };

  const handleClickCadastro = () => {
    setOpen(false); // gam byarra TODO: Atualizar listagem
    handleModal();
    // console.log('clicou cadastrar');
  };

  return (
    <>
      {/* <Button variant="primary" onClick={handleClickShow}>
        Mudar show
      </Button> */}
      <Button variant="success" onClick={handleClickListar}>
        Listar Usuários
      </Button>
      <Button variant="warning" onClick={handleClickCadastro}>
        Cadastrar Usuário
      </Button>
      <UserForm />

      <Collapse in={open}>
        <Container id="listar-usuarios" className="mt-3">
          <UserTable />
        </Container>
      </Collapse>
    </>
  );
};

export default Main;
