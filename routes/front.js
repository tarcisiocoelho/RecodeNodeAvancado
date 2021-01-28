var db = require('../config/database');
module.exports = function (app) {
    var connection = db();
    app.get('/frontend', function (req, res) {
        var query = connection.query('SELECT * FROM conteudo WHERE categoria = "frontend" ',
            function (error, results, fields) {
                console.log(error, results)
                res.render('./panigas/frontend', { dados: results });
            });
        query.on('error', function (error) {
            console.log('[mysql error]', error);
        })
    })
}