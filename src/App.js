import "./App.css";
import request from "./request";
import Row from "./Row";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title="Netflix Orignal Movies"
        URL={request.fetchNetflixOrignal}
        isLarge
      />
      <Row title="Trending Movies" URL={request.fetchTrending} />
      <Row title="Action Movies" URL={request.fetchActionMovies} />
      <Row title="Upcoming Movies" URL={request.fetchUpcomingMovies} />
      <Row title="Comedy Movies" URL={request.fetchComedyMovies} />
      <Row title="Documentary Movies" URL={request.fetchDocumentaryMovies} />
      <Row title="Horror Movies" URL={request.fetchHorrorMovies} />
      <Row title="Romance Movies" URL={request.fetchRomanceMovies} />
      <Row title="Top Rated Movies" URL={request.fetchTopRated} />
    </div>
  );
}

export default App;
