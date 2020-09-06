module.exports = app => {
  const notes = require("../controllers/note.controller");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", notes.create);

  // Retrieve all Tutorials
  router.get("/", notes.findAll);
  app.use('/api/notes', router);
};
