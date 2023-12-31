import { useState } from "react";
import "./App.css";
import Auth from "./Components/Auth/Auth";

let users = [];

function App() {
  const [isAuth, setIsAuth] = useState(false);

  function server(email, password) {
    users.push({ email, password });
    setTimeout(() => setIsAuth(true), 1000);
  }
  return (
    <div className="App">
      <Auth isAuth={isAuth} server={server} />
    </div>
  );
}

export default App;
