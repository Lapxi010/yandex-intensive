const router = require("express").Router();
const {
  getAllCategories,
  getBooks,
  getReviews,
} = require("../handlers/index.js");

router.get("/categories", getAllCategories);
router.get("/books", getBooks);
router.get("/reviews", getReviews);

module.exports = router;
