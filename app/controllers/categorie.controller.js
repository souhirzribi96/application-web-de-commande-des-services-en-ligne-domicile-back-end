const db = require("../models");
const Categories = db.categorie;
const Sequelize = require("sequelize");

exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Categories.findAll(
      {
          include: [{
              model: db.tutorials,
              // where:Sequelize.literal(db.tutorials.id_etd=db.user.id),
          }]
      }
).then(data => {
        res.send(data);

      })
      .catch(err => {
        res.status(500).send({
          message:
              err.message || "Some error occurred while retrieving tutorials."
        });
      });
};
// find all published Tutorial
exports.findAllPublished = (req, res) => {
  Categories.findAll({})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};
// Find a single Tutorial with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    Categories.findByPk(id, {
        include: [{
            model: db.tutorials,
        }]
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Tutorial with id=" + id
            });
        });
};
