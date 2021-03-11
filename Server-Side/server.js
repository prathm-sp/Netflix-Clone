const express = require("express");
const morgan = require("morgan");
const createError = require("http-errors");
const { default: axios } = require("axios");
const cors = require("cors");
require("dotenv").config();
const movieRoute = require("./Routes/movieRoutes");
require("./Database/index");
const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const PORT = process.env.PORT || 8080;

app.use("/Movie", movieRoute);

app.use((req, res, next) => {
  //   const error = new Error("Not Found");
  //   error.status = 404;
  //   next(error);

  next(createError.NotFound("Please Check The Route And Try Again"));
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    status: err.status || 500,
    message: err.message,
  });
});

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
