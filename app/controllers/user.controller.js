exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};
const db = require("../models");
const User = db.user;

exports.userBoard = (req, res) => {
    User.findAll({
        include: [{
            model: db.tutorials,
                            as: 'serv',
        },
            {
                model: db.tutorials,
                as: 'tutorials',

            },
            {  model: db.note,
                as: 'fabriq',
            },
            {
                model: db.note,
                as: 'prend',},]

    }).then(data => {
        res.send(data)
        console.log(data);
    })
};

exports.adminBoard = (req, res) => {
  User.findAll({
      include: [{
          model: db.tutorials,
          as: 'serv',
      },
          {
              model: db.tutorials,
              as: 'tutorials',
          },
          {  model: db.note,
              as: 'fabriq',
          },
          {
              model: db.note,
              as: 'prend',},
          ]
  }).then(data => {
      for(var i = 0; i < data.length; i++) {
      data[i].data= data[i].data.toString('base64');
      // console.log('hahahah',data[i].data);
      }res.send(data);
      })
  // res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
  User.findByPk(req.userId,{
    include: [{
      model: db.tutorials,
        as: 'tutorials',
        include: [{
        // attributes: [name],
        model: db.categorie,
      }]
    },
        {  model: db.note,
            as: 'fabriq',
        },
        {
            model: db.note,
            as: 'prend',}
    ]
  }).then(data => {
      // data.data= data.data.toString('base64');
      // console.log(data.data);
      res.send(data);

      // console.log(data.tutorials[1]);
  })
  // res.status(200).send("Moderator Content.");

};
// Find a single Tutorial with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    User.findByPk(id)
        .then(data => {
            data.data= data.data.toString('base64');
            console.log(data.data);
            res.send(data);

        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving user with id=" + id
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    User.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "user was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete user with id=${id}. Maybe user was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete user with id=" + id
            });
        });
};
exports.update = (req, res) => {
    const id = req.params.id;

    User.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "User was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Tutorial with id=" + id
            });
        });
};
/*Il existe 4 fonctions:
- /api/test/allpour l'accès public
- /api/test/userpour les utilisateurs connectés (rôle: utilisateur / modérateur / administrateur )
- /api/test/modpour les utilisateurs ayant un rôle de modérateur
- /api/test/adminpour les utilisateurs ayant un rôle d' administrateur*/



/*Maintenant, avez-vous une question?
Souhaitez-vous savoir comment nous pouvons combiner des middlewares avec des fonctions de contrôleur?*/
