var survey = require("../public/survey.html");
var index = require("../public/home.html");

module.exports = function (app) {

    app.get('/survey', function (req, res) {
        res.json(survey);
    })

    app.get('/', function (req, res) {
        res.json(index);
    })
}