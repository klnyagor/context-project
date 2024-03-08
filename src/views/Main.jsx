import { Button } from 'react-bootstrap';

const Main = () => {
  return (
    <>
      {/* <Button variant="primary" onClick={handleClickShow}>
        Mudar show
      </Button> */}
      <Button
        variant="success"
        onClick={() => {
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
      <> Listagem </>
    </>
  );
};

export default Main;
