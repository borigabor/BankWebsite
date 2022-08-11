import React from "react";
import GlobalStyle from "./globalStyle";
import Home from "./pages";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SigninPage from "./pages/signin";


function App() {


  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/signin' components={SigninPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
