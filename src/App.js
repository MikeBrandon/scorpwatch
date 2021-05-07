import './App.css';
import React from "react";
import Nav from "./components/Nav";
import Detail from "./components/Detail";
import { BrowserRouter as Router, Switch , Route} from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
        <Router>
            <Nav/>
            <Switch>
                <Route path={"/detail/:id/:type"}>
                    <Detail/>
                </Route>
                <Route path={"/"}>
                    <Home/>
                </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
