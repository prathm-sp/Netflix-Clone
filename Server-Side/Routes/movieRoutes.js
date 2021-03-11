const router = require("express").Router();
const movieControllers = require("../Controllers/movieControllers");

router.get("/update", movieControllers.updateHomePageMovies);

router.get("/getHomePageMovies", movieControllers.getHomePageMovies);

module.exports = router;
