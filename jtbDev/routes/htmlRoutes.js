// Routes for sending users to various html pages
let path = require("path");

// Routes

module.exports = function(app) {
    // This loads the login page
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "login"));
    });
    // game will start here.
    app.get("/game", function(req, res) {
        res.sendFile(path.join(__dirname, "charMenu"));
    });
    // Once a character is chosen they are ready to start the game!
    // app.get("/text-Adventure", function(req, res) {
        // res.sendFile(path.join(__dirname, "game"));
    // });
}