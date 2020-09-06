/*Pour vérifier une action d'inscription, nous avons besoin de 2 fonctions:
- vérifier si usernameou emailest en double ou non
- vérifier si rolesla demande existe ou non*/
const db = require("../models");
const ROLES = db.ROLES;
const User = db.user;

checkDuplicateUsernameOrEmail = (req, res, next) => {
    // Username
    User.findOne({
        where: {
            username: req.body.username
        }
    }).then(user => {
        if (user) {
            res.status(400).send({
                message: "Erreur! Login(Pseudo) existe déja!"
            });
            return;
        }

        // Email
        User.findOne({
            where: {
                email: req.body.email
            }
        }).then(user => {
            if (user) {
                res.status(400).send({
                    message: "Erreur! Email existe déja!"
                });
                return;
            }
            User.findOne({
                where: {
                    cin: req.body.cin}
            }).then(user => {
                if (user) {
                    res.status(400).send({
                        message: "Erreur! CIN existe déja!"
                    });
                    return;
                }
                next();
            });
        });
    });
};

checkRolesExisted = (req, res, next) => {
    if (req.body.roles) {
        for (let i = 0; i < req.body.roles.length; i++) {
            if (!ROLES.includes(req.body.roles[i])) {
                res.status(400).send({
                    message: "Erreur! Role n'existe pas! " + req.body.roles[i]
                });
                return;
            }
        }
    }

    next();
};
/*Pour traiter l'authentification et l'autorisation, nous avons ces fonctions:
    - vérifier si elle token est fournie, légale ou non. Nous obtenons le jeton
    de x-access-token des en-têtes HTTP, puis utilisons la fonction de
    jsonwebtoken     verify() .
- vérifier si rolesl'utilisateur contient ou non le rôle requis.*/
const verifySignUp = {
    checkDuplicateUsernameOrEmail: checkDuplicateUsernameOrEmail,
    checkRolesExisted: checkRolesExisted
};

module.exports = verifySignUp;
