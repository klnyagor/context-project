import api from '../api/ContextApi';
import { Button } from 'react-bootstrap';

const Main = () => {
  const handleListUser = () => {
    api
      .get('users/')
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
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
          console.log(api.get('users/'));
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
      <> Listagem </>
    </>
  );
};

export default Main;
