import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeScreen from "./HomeScreen/HomeScreen";
import LoginScreen from "./Form/LoginScreen";
import RegisterScreen from "./Form/SignUpScreen";
import MovieDetails from "./MovieDetails";
import axios from "./axios";
import { useState } from "react";

function App() {
  console.log("App Started");
  console.log("Coming");
  var [movieDetails, setMovieDetails] = useState();
  console.log("movieDetails = ", movieDetails);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <HomeScreen setMovieDetails={setMovieDetails} />
          </Route>
          <Route exact path="/Login">
            <LoginScreen />
          </Route>
          <Route exact path="/Register">
            <RegisterScreen />
          </Route>
          <Route exact path="/MovieDetails">
            <MovieDetails movieDetails={movieDetails} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
