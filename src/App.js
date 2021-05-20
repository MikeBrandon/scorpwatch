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
                <Route path={"/genre/:type/:id/:page"}>

                </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
