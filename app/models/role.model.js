module.exports = (sequelize, Sequelize) => {
  const Role = sequelize.define("roles", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING
    }
  });

  return Role;
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
