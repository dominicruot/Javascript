import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import Signup from "./components/signup";
import UserContext from "./UserContext";
import axios from "axios";
import Login from "./components/login";
import Landing from "./components/landing";

function App() {
  const [email, setEmail] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8000/user', { withCredentials: true })
      .then(response => {
        setEmail(response.data.email);
      });
  }, []);

  function logout() {
    axios.post('http://localhost:8000/logout', {}, { withCredentials: true })
      .then(() => setEmail(''));
  }

  return (
    <UserContext.Provider value={{ email, setEmail }}>
      <BrowserRouter>
        <nav>
          <Link to={'/'}>Landing</Link>
          {!email && (
            <>
              <Link to={'/login'}>Login</Link>
              <Link to={'/signup'}>Signup</Link>
            </>
          )}
          {!!email && (
            <a onClick={e => { e.preventDefault(); logout(); }}>Logout</a>
          )}
        </nav>
        <main>
          <Switch>
            <Route exact path={'/'} component={Landing} />
            <Route exact path={'/register'} component={Signup} />
            <Route exact path={'/login'} component={Login} />
          </Switch>
        </main>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;