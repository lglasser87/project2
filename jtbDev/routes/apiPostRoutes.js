var db = require("../routes");

module.exports = function(app) {
    app.get("/api/characters", function(req, res) {
        // Here we get all the characters the player has created.
        db.Character.findAll({
            include: [db.Post]
        }).then(function(dbCharacter) {
            res.json(dbCharacter);
        });
    });

    // This will allow the player to create new characters if there aren't any
    app.post("/api/characters", function(req, res) {
        db.Character.create(req.body).then(function(dbCharacter) {
            res.jsob(dbCharacter);
        });
    });

    // This will allow the player to delete any existing characters
    app.delete("/api/characters/:id", function(req, res) {
        db.Character.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbCharacter) {
            res.json(dbCharacter);
        });
    });
}