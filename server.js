const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
/*l' importation express, body-parseret corsmodules:
Express est pour la construction des API Rest
body-parser analyseur de corps aide à analyser la demande et à créer l' req.bodyobjet
cors fournit un middleware Express pour activer CORS*/
const app = express();
/*Notez que nous avons établi l' origine: http://localhost:8081.
- définir une route GET simple à tester.
- écouter sur le port 8080 les requêtes entrantes.*/
var corsOptions = {
  origin: "http://localhost:8081"
};
//Ajouter body-parseret corsmiddlewares en utilisant la app.use()
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// database
//ye3ytelha base
const db = require("./app/models");
const Role = db.role;
const Categ=db.categorie;
//sych db avec back end
db.sequelize.sync();
// En cours de développement, vous devrez peut-être
// supprimer les tables existantes et resynchroniser la base
//  de données. Vous pouvez donc utiliser force: truele code ci-dessus.
// force: true will drop the table if it already exists
// db.sequelize.sync({force: true}).then(() => {
//   console.log('Drop and Resync Database with { force: true }');
//   initial();
//   initialcatg();
// });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the application." });
});

// routes
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);
require("./app/routes/turorial.routes")(app);
require("./app/routes/categorie.routes")(app);
require("./app/routes/note.routes")(app);
global.__basedir = __dirname;

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
/*initial()La fonction nous aide à créer 3 lignes dans la base de données.
*/
function initial() {
  Role.create({
    id: 1,
    name: "user"
  });

  Role.create({
    id: 2,
    name: "etudiant"
  });

  Role.create({
    id: 3,
    name: "admin"
  });
}
function initialcatg() {
  Categ.create({
    id: 1,
    name: "Entretient de la maison"
  });

  Categ.create({
    id: 2,
    name: "Garde d'enfants"
  });

  Categ.create({
    id: 3,
    name: "Seniors & Autonomie"
  });
  Categ.create({
    id: 4,
    name: "Bricolage"
  });
  Categ.create({
    id: 5,
    name: "Jardinage"
  });
}
