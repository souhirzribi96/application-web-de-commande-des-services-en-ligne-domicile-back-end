module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "",
  DB: "aOw3U3Cm9o",
  dialect: "mysql",
  pool: {
    max: 20000000,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
/*
Les cinq premiers paramètres sont pour la connexion MySQL.
    poolest facultatif, il sera utilisé pour la configuration du pool de connexions Sequelize:

    max: nombre maximum de connexions dans le pool
min: nombre minimum de connexions dans le pool
idle: durée maximale, en millisecondes, pendant laquelle une connexion peut être inactive avant d'être libérée
acquire: temps maximum, en millisecondes, pendant lequel ce pool essaiera d'obtenir la connexion avant de lancer une erreur*/
