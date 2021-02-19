import axios from "axios";
console.log("Coming");

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;
