import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Login from './components/login'
import Signup from './components/signup'
import Dashboard from './components/dashboard'
import Header from './components/header'
import Landing from './components/landing'
import './bootstrap.min.css'

function App() {

  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Container>
            <Route path='/' component={Landing} exact />
            <Route path='/login' component={Login} />
            <Route path='/signup' component={Signup} exact />
            <Route path='/dashboard' component={Dashboard} exact />
          </Container>
        </Switch>
      </Router>


    </>

  );
}
export default App

