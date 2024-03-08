import { Formik } from 'formik';
import { useUser } from '../../contexts/UserContext';
import { Alert, Button, Form, Modal } from 'react-bootstrap';

const UserForm = () => {
  let { showModal, handleModal, cadastrarUser } = useUser();

  const handleForm = (values, { setSubmitting }) => {
    setTimeout(() => {
      setSubmitting(false);
      cadastrarUser(values);
      alert(`"Usuário cadastrado": ${JSON.stringify(values, null, 2)}`);
      handleModal();
    }, 400);
  };

  return (
    <>
      <Modal show={showModal} onHide={handleModal}>
        <Modal.Header closeButton>
          <Modal.Title as="h5">Novo Usuario</Modal.Title>
        </Modal.Header>
        <Formik
          initialValues={{ nome: '', email: '' }}
          validate={(values) => {
            const errors = {};
            if (!values.nome) {
              errors.nome = 'Required';
            }
            if (!values.email) {
              errors.email = 'Required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            }
            return errors;
          }}
          onSubmit={handleForm}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <Form onSubmit={handleSubmit}>
              <Modal.Body>
                <Form.Group>
                  <Form.Label>Nome</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Digite o Nome de usuário"
                    name="nome"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.nome}
                  />
                  {!errors.nome || (
                    <Alert variant="danger">
                      {errors.nome && touched.nome && errors.nome}
                    </Alert>
                  )}
                </Form.Group>
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Digite o E-mail"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  {!errors.email || (
                    <Alert variant="danger">
                      {errors.email && touched.email && errors.email}
                    </Alert>
                  )}
                </Form.Group>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="danger" onClick={handleModal}>
                  Fechar
                </Button>
                <Button variant="success" type="submit" disabled={isSubmitting}>
                  Confirmar
                </Button>
              </Modal.Footer>
            </Form>
          )}
        </Formik>
      </Modal>
    </>
  );
};

export default UserForm;
