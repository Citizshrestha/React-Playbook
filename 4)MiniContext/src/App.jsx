import Login from './Components/Login';
import Profile from './Components/Profile';
import UserContextProvider from './context/UserContextProvider';

function App() {
  return (
    <UserContextProvider>
      <div className="app-container">
        <header className="app-header">
          <h1>Welcome to Context API Demo</h1>
        </header>
        <main className="main-content">
          <Login />
          <Profile />
        </main>
      </div>
    </UserContextProvider>
  );
}

export default App;
