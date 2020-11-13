import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SingUp from "./pages/SingUp";
import Links from "./pages/Manage/Links";
import LinksCreate from "./pages/Manage/Links/Create";
import LinksEdit from "./pages/Manage/Links/Edit";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <ul className="list group list-group-horizontal">
            <li className="list-group-item">
              <Link to="/sing-in">Sing in</Link>
            </li>
            <li className="list-group-item">
              <Link to="/sing-up">Sing up</Link>
            </li>
            <li className="list-group-item">
              <Link to="/manage/links/create">Create</Link>
            </li>
            <li className="list-group-item">
              <Link to="/manage/links/edit">Edit</Link>
            </li>
            <li className="list-group-item">
              <Link to="/manage/links">Links</Link>
            </li>
            <li className="list-group-item">
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/sing-in">
            <SignIn />
          </Route>
          <Route path="/sing-up">
            <SingUp />
          </Route>
          <Route path="/manage/links/create">
            <LinksCreate />
          </Route>
          <Route path="/manage/links/edit">
            <LinksEdit />
          </Route>
          <Route path="/manage/links">
            <Links />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
