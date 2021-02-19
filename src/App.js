import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeScreen from "./HomeScreen";
import LoginScreen from "./LoginScreen";

function App() {
  console.log("Coming");
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <HomeScreen />
          </Route>
          <Route exact path="/Login">
            <LoginScreen />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
