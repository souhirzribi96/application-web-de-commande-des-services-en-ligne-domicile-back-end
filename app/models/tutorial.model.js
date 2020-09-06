module.exports = (sequelize, Sequelize) => {
  const Tutorial = sequelize.define("tutorial", {
    libelle: {
      type: Sequelize.STRING
    },
    date: {
      type: Sequelize.DATE
    },
    heure_deb: {
      type: Sequelize.TIME
    },
    heure_fin: {
      type: Sequelize.TIME
    },
    prix: {
      type: Sequelize.INTEGER
    },
    etat: {
      type: Sequelize.STRING
    },
    description:{
      type: Sequelize.STRING
    },
    categorieCode: {
      type: Sequelize.INTEGER
    },
    id_etd:{
      type: Sequelize.INTEGER
    },
    id_user:{
      type: Sequelize.INTEGER
    }
  });




  return Tutorial;
};
/*Ce modèle séquentiel représente une table de didacticiels dans la base de données MySQL. Ces colonnes seront générées automatiquement: id , titre , description , publiées , createdAt , updatedAt .

Après avoir initialisé Sequelize, nous n'avons pas besoin d'écrire les fonctions CRUD, Sequelize les prend en charge toutes:

créer un nouveau tutoriel: create(object)
trouver un tutoriel par id: findByPk(id)
obtenez tous les tutoriels: findAll()
mettre à jour un tutoriel par id: update(data, where: { id: id })
supprimer un didacticiel: destroy(where: { id: id })
supprimer tous les didacticiels: destroy(where: {})
trouver tous les tutoriels par titre: findAll({ where: { title: ... } })
Ces fonctions seront utilisées dans notre contrôleur.*/
