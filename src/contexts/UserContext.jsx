import { createContext, useContext, useState } from 'react';
import api from '../api/ContextApi';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  let [users, setUsers] = useState([]);

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

  return (
    <UserContext.Provider value={{ users, setUsers, listUsers }}>
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
