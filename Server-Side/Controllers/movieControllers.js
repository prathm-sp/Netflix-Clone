const { default: axios } = require("axios");
const Movie = require("../Models/Movie-Data-Model");
const schedule = require("node-schedule");

module.exports = {
  updateHomePageMovies: async (req, res, next) => {
    await Movie.deleteMany({})
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    var differntMovies = [
      ["Action", "28"],
      ["Comedy", "35"],
      ["Romance", "10749"],
      ["Science_Fiction", "878"],
      ["Crime", "80"],
      ["Family", "10751"],
      ["Fantasy", "14"],
      ["Mystery", "9648"],
      ["Horror", "27"],
    ];
    for (let i = 0; i < differntMovies.length; i++) {
      axios
        .get(
          `https://api.themoviedb.org/3/discover/movie?api_key=de88566cf29ef654e21394ab0906ad7e&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${differntMovies[i][1]}`
        )
        .then(async (data) => {
          console.log(differntMovies[i][0]);
          const savedData = await new Movie({
            CategoryName: `${differntMovies[i][0]} Movies`,
            Movies: data.data.results,
          });
          await savedData.save();
          if (i == differntMovies.length - 1) res.send("data Saved");
        })
        .catch((err) => {
          console.log(err.response.message);
          next(err);
        });
      // res.send("Data Saved Successfully");
    }
  },
  getHomePageMovies: (req, res, next) => {
    try {
      Movie.find({})
        .then((data) => {
          res.status(200).send(data);
        })
        .catch((err) => {
          throw err;
        });
    } catch (error) {
      next(error);
    }
  },
};
