const db = require("../models");
const Note = db.note;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body.num) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  // Create a Tutorial
  const note = {
    noter: req.body.noter,
    num:req.body.num,
    id_user:req.body.id_user,
    id_etd:req.body.id_etd
  };

  // Save Tutorial in the database
  Note.create(note)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "ereueeeer."
      });
    });

};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  const id_etd = req.query.id_etd;
  var condition = id_etd ? { id_etd: { [Op.like]: `%${id_etd}%` } } : null;

  Note.findAll({
    where: condition })
    .then(data => {
      res.send(data);
      // console.log(data[0].num);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "er."
      });
    });
};



