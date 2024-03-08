import { createContext, useContext } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  return <UserContext.Provider value={{}}> {children} </UserContext.Provider>;
};

export const useUser = () => {
  const ctx = useContext(UserContext);
  if (!ctx) {
    throw new Error('Não foi possível inicializar o contexto do usuário');
  }

  return ctx;
};
