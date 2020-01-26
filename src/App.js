import React from "react";
import NavBar from "./components/Navbar/NavBar";
// import Testing from "./components/Testing/Testing";
// I don't need to test the tailwind css properties right now

// New - import the React Router components, and the Profile page component
import { Router, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import history from "./utils/history";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

function App() {
  return (
    <div className="App container">
      {/* Don't forget to include the history module */}
      <Router history={history}>
        <header>
          <NavBar />
        </header>
        <Switch>
          <Route path="/" exact />
          <PrivateRoute path="/profile" component={Profile} />
        </Switch>
      </Router>

      <h1>Welcome to The Book Club</h1>
    </div>
  );
}

export default App;