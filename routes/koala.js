var express = require('express');
var router = express.Router();
var pool = require('../modules/pool');

router.get('/', function (req, res) {
    console.log('in route for koalas');
    pool.connect(function(connectionError, client, done) {
        if (connectionError) {
            console.log(connectionError);
            res.sendStatus(500);
        } else {
            client.query('SELECT * FROM inventory', function (queryError, resultObj) {
                done();
                if (queryError) {
                    console.log(connectionError);
                    res.sendStatus(500);
                } else {
                    console.log('resultObj.rows: ', resultObj.rows);
                    res.send(resultObj.rows);
                }
            });
        }
    });
});

module.exports = router;