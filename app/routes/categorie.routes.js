module.exports = app => {
  const categories = require("../controllers/categorie.controller");

  var router = require("express").Router();
  // Retrieve all Tutorials
  router.get("/", categories.findAll);
  // Retrieve a single Tutorial with id
  router.get("/:id", categories.findOne);

  app.use('/api/categories', router);
};
