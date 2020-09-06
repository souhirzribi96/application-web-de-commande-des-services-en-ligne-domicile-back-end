module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    username: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    cin: {
        type: Sequelize.INTEGER
    },
    prenom:{
        type: Sequelize.STRING

    },
     nom:{
        type: Sequelize.STRING
      },
      sexe:{
          type: Sequelize.STRING

      },
      datenais:{
          type: Sequelize.DATE
      },
      codepostal: {
          type: Sequelize.INTEGER
      },
      ville:{
          type: Sequelize.STRING

      },
      addresse:{
          type: Sequelize.STRING

      },
      tel:{
          type: Sequelize.INTEGER
      },
        universite:{
            type: Sequelize.STRING
        },
      sante:{
          type: Sequelize.STRING
      },
      id_role:{
          type: Sequelize.INTEGER
      },
      data: {
          type: Sequelize.BLOB('long')
      },
      name:{
          type: Sequelize.STRING
      }

  });
  return User;
};
// Ces modèles séquentiels représentent la table des utilisateurs et des rôles dans la base de données MySQL.
/*
Après avoir initialisé Sequelize, nous n'avons pas besoin d'écrire les fonctions CRUD, Sequelize les prend en charge toutes:

créer un nouvel utilisateur: create(object)
trouver un utilisateur par id: findByPk(id)
trouver un utilisateur par email: findOne({ where: { email: ... } })
obtenir tous les utilisateurs: findAll()
trouver tous les utilisateurs par nom d' utilisateur :findAll({ where: { username: ... } })
Ces fonctions seront utilisées dans nos contrôleurs et middlewares.*/
