import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeScreen from "./HomeScreen/HomeScreen";
import LoginScreen from "./Form/LoginScreen";
import MovieDetails from "./MovieDetails";

function App() {
  console.log("App Started");
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
          <Route exact path="/MovieDetails">
            <MovieDetails />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
