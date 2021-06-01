// import logo from "./logo.svg";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import UserForm from './Components/UserForm'
import LoginForm from './Components/LoginForm'
import IdexNav from './Components/idexNav'
import Home from './Components/home'
import Error from './Components/error'
import About from './Components/about'
import 'bootstrap/dist/css/bootstrap.min.css';
import Admin from'./Components/admin'
import NewsEvent from './Components/newsEvent';
import Reservation from './Components/Reservation';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    display: "flex"
  }
});

// import { createBrowserHistory } from "history";

function App() {
  return (
    <Router>
      <div class="myBody">
        <IdexNav />
        <Switch>

          <Route exact path="/LoginForm">
            <LoginForm />
          </Route>

          <Route path="/UserForm">
            <UserForm />
          </Route>
          <Route  path="/NewsEvent">
            <NewsEvent />
          </Route>

          <Route path="/Aboutus">
            <About />
          </Route>


          <Route path='/Reservation'>
            <Reservation />
          </Route>

          <Route path="/admin">
            <Admin />
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
