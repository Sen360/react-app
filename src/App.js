import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Todolist from "./components/Todolist/Todolist";
import Profile from "./components/Profile/Profile";
import Home from "./components/Home/Home";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/todolist">Todolist</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact render={() => <Home />} />
          <Route path="/profile/:id" render={() => <Profile />} />
          <Route path="/profile" render={() => <Profile />} />
          <Route path="/todolist" render={() => <Todolist />} />
          <Route path="/" render={() => <div>Erreur</div>} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
