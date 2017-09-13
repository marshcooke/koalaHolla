var express = require('express');
var router = express.Router();
var pool = require('../modules/pool');

router.get('/', function (req, res) {
    pool.connect(function (connectionError, client, done) {
        if (connectionError) {
            console.log(connectionError);
            res.sendStatus(500);
        } else {
            console.log('db connection success');
            client.query('SELECT * FROM inventory', function (queryError, resultObj) {
                done();
                if (queryError) {
                    console.log(queryError);
                    res.sendStatus(500);
                } else {
                    console.log('query success:', resultObj.rows);
                    res.send(resultObj.rows);
                }
            });
        }
    });
});

router.post('/', function (req, res) {
    var koala = req.body;
    console.log('req.body: ', koala);
    pool.connect(function (connectionError, client, done) {
        if (connectionError) {
            console.log(connectionError);
            res.sendStatus(500);
        } else {
            console.log('db connection success');

            var queryString = 'INSERT INTO inventory(name, age, gender, transfer, notes, mark_ready)'
                + 'VALUES ($1, $2, $3, $4, $5, $6);';
            var values = [koala.name, koala.age, koala.gender, koala.transfer, koala.notes, koala.mark_ready];

            client.query(queryString, values, function (queryError, resultObj) {
                done();
                if (queryError) {
                    console.log(queryError);
                    res.sendStatus(500);
                } else {
                    console.log('query success:', resultObj);
                    res.sendStatus(201);
                }
            });
        }
    });
});

module.exports = router;