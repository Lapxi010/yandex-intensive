const { reply, getById } = require("../utils/index.js");
const { categories, mock, comments } = require("../constants/mock.js");

const getAllCategories = (req, res, next) => {
  reply(res, categories);
};

const getBooks = (req, res, next) => {
  const { categorie } = req.query;

  let result = [];
  let cat = categories.filter((val) => val.id === categorie)[0].name;
  console.log(cat);
  if (categorie) {
    result = mock.filter((val) => val.categorie === cat);
  } else {
    result = mock;
  }

  reply(res, result);
};

const getReviews = (req, res, next) => {
  const { id } = req.query;
  let arr = mock.find((val) => val.id === String(id));

  let result = [];

  if (arr) {
    arr.comments.forEach((element) => {
      result.push(comments.find((val) => val.id === element));
    });
    console.log(result);
  }

  reply(res, result);
};

module.exports = { getAllCategories, getBooks, getReviews };
