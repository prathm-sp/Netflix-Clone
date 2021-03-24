import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MovieScreen from "./Movies/MovieScreen";
import LoginScreen from "./Form/LoginScreen";
import RegisterScreen from "./Form/SignUpScreen";
import HomePage from "./HomePage";
import { useState } from "react";
import PaymentForm1 from "./Form/PayementForm/PF1";
import PaymentForm2 from "./Form/PayementForm/PF2";

function App() {
  var [movieDetails, setMovieDetails] = useState();
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/Login">
            <RegisterScreen />
          </Route>
          <Route exact path="/Register">
            <RegisterScreen />
          </Route>
          <Route exact path="/Movies">
            <MovieScreen setMovieDetails={setMovieDetails} />
          </Route>
          <Route exact path="/SignUp/password">
            <PaymentForm1 />
          </Route>
          <Route exact path="/SignUp">
            <PaymentForm2 />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
