const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(config.DB, config.USER,config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: false,

    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);
const db = {};
//zouz tablouet

db.Sequelize = Sequelize;
db.sequelize = sequelize;
/*
sequelize.sync();
*/

db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.role = require("../models/role.model.js")(sequelize, Sequelize);
/*jdidaaaaaaaaaaaaaaaaaaaaaaaaaaaa*/
db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);
db.categorie = require("../models/categorie_model")(sequelize, Sequelize);
db.note = require("../models/note.model")(sequelize, Sequelize);

db.role.belongsToMany(db.user, {through: "user_roles", foreignKey: "roleId", otherKey: "userId"});
db.user.belongsToMany(db.role, {through: "user_roles", foreignKey: "userId", otherKey: "roleId"});
/*Avec through, foreignKey, otherKey, nous allons avoir une nouvelle table user_roles
   comme connexion entre les utilisateurs et la table des rôles via leur clé
primaire en tant que clés étrangères.*/
// Here we can connect countries and cities base on country code
db.categorie.hasMany(db.tutorials, { foreignKey: 'categorieCode'});
db.tutorials.belongsTo(db.categorie, {foreignKey: 'categorieCode'});

/*forien key avec l'etudiant (obligatoire)*/
db.user.hasMany(db.tutorials, {as:'tutorials',foreignKey: 'id_etd'});
db.tutorials.belongsTo(db.user, {as: 'tutorials',foreignKey: 'id_etd'});

/*foreign key entre user et service */
db.user.hasMany(db.tutorials, { as:'serv',foreignKey: 'id_user'});
db.tutorials.belongsTo(db.user, {as:'serv',foreignKey: 'id_user'});
/*relation entre user et noteeee */
db.user.hasMany(db.note, { as:'fabriq',foreignKey: 'id_user'});
db.note.belongsTo(db.user, {as:'fabriq',foreignKey: 'id_user'});
/*relation entre etd && note*/
db.user.hasMany(db.note, { as:'prend',foreignKey: 'id_etd'});
db.note.belongsTo(db.user, {as:'prend',foreignKey: 'id_etd'});



/*L'association entre les utilisateurs et les rôles est une relation plusieurs-à-plusieurs:
- Un utilisateur peut avoir plusieurs rôles.
- Un seul rôle peut être joué par de nombreux utilisateurs.
Nous utilisons User.belongsToMany(Role)pour indiquer que le modèle utilisateur peut appartenir à de nombreux rôles et vice versa.*/
db.ROLES = ["user", "admin", "etudiant"];
db.CATEGORIES = ["Entretient de la maison", "Garde d'enfants", "Seniors & Autonomie","Bricolage","Jardinage"];

module.exports = db;
