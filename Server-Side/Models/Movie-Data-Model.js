const mongoose = require("mongoose");
const schema = mongoose.Schema;

const movieSchema = new schema({
  CategoryName: {
    type: String,
    required: true,
  },
  Movies: {
    type: Object,
    require: true,
  },
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
