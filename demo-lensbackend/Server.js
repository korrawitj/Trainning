const express = require('express')
const router = express()
const { Pool, Client } = require('pg')
const connectionString = 'postgresql://postgres:pan010299566@localhost:5432/Demo';

router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

router.get('/posts', (req, res) => {

    const client = new Client({
        connectionString: connectionString,
    })
    client.connect()

    client.query('SELECT * FROM posts ORDER BY id ASC;', (err, result) => {
        if (err) return sendError(err);

        // Return result
        return res.json(result.rows);
    })
});

router.get('/posts/:id', (req, res) => {
    var postsID = parseInt(req.params.id);

    const query = {
        text: 'SELECT * FROM posts WHERE id=$1;',
        values: [postsID]
    }

    const client = new Client({
        connectionString: connectionString,
    })
    client.connect()

    client.query(query, (err, result) => {
        if (err) return console.log(err);

        // Return result
        return res.json(result.rows[0]);
    })
});


router.listen(2000, () => {
    console.log('Start server at port 2000.')
})