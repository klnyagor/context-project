import { createContext, useContext, useState } from 'react';
import api from '../api/ContextApi';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  let [users, setUsers] = useState([]);

  let [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(!showModal);
  };

  const listUsers = async () => {
    await api
      .get('users')
      .then((res) => {
        setUsers([...res.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const cadastrarUser = async (user) => {
    await api.post('users', user);
    console.log('POST: Cadastro de usuário');
  };

  return (
    <UserContext.Provider
      value={{
        users,
        setUsers,
        listUsers,
        showModal,
        handleModal,
        cadastrarUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const ctx = useContext(UserContext);
  if (!ctx) {
    throw new Error('Não foi possível inicializar o contexto do usuário');
  }

  return ctx;
};
