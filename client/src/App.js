// import logo from "./logo.svg";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import UserForm from './Components/UserForm'
import LoginForm from './Components/LoginForm'
import Navbars from './Components/Navbars'
import Home from './Components/home'
import Error from './Components/error'
import 'bootstrap/dist/css/bootstrap.min.css';
import history from './history'
import About from "./Components/about"
// import { createBrowserHistory } from "history";

function App() {
  return (
    <Router history={history}>
      <div class="myBody">
        <Navbars />
        

        <Switch>

          <Route exact path="/LoginForm">
            <LoginForm />
          </Route>

          <Route path="/UserForm">
            <UserForm />
          </Route>

          <Route path="/about" >
            <About />
          </Route>

          <Route path="/" >
            <Home />
          </Route>

         

          <Route>
            <Error />
          </Route>

        </Switch>

      </div>
    </Router>
  );
}

export default App;
