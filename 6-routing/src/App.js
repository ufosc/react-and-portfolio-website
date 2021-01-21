import { Route, Switch, Link } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path = {"/"}>
        <h1>Welcome to the landing page!</h1>
        <Link to="/about">Go to the new page</Link>
      </Route>
      <Route exact path = {"/about"}>
        <h1>Welcome to the other page!</h1>
        <Link to="/">Go back home</Link>
      </Route>
    </Switch>
  );
}

export default App;
