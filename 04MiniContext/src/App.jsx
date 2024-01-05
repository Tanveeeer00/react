import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";
import UserState from "./contexts/UserState";

function App() {
  return (
    <UserState>
      <h1>Hello world</h1>
      <Login />
      <Profile />
    </UserState>
  );
}

export default App;
