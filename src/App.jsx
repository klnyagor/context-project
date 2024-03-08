import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './views/Main';
import { UserProvider } from './contexts/UserContext';

function App() {
  return (
    <>
      <UserProvider>
        <Main />
      </UserProvider>
    </>
  );
}

export default App;
