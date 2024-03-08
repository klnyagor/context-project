import { useUser } from '../../contexts/UserContext';
import { Button, Form, Modal } from 'react-bootstrap';

const UserForm = () => {
  let { showModal, handleModal } = useUser();

  return (
    <>
      <Modal show={showModal} onHide={handleModal}>
        <Modal.Header closeButton>
          <Modal.Title>Novo Usuario</Modal.Title>
        </Modal.Header>
        <Form>
          <Modal.Body>
            <Form.Group>
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite o Nome de usuário"
                name="nome"
                onChange={() => {}}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Digite o E-mail"
                name="email"
                onChange={() => {}}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleModal}>
              Fechar
            </Button>
            <Button variant="success" type="submit">
              Confirmar
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default UserForm;
