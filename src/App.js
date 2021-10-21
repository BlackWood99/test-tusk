import React from "react";
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Auth from "./pages/Auth";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/profile" component={Profile} exact />
          <Route path="/" component={Auth} exact />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
