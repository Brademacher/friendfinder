var friends = require("../data/friends.js");

module.exports = function(app) {

    app.get("/api/reservations", function (req, res) {
        return res.json(friends);
    });
}