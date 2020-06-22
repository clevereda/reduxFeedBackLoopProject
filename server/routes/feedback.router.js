//Bringing in express into our router
const express = require('express');
//accessing the router function in expressing
const router = express.Router();

//Connecting to our datbase through a pool
const pool = require('../modules/pool');

//GET route to display feedback on the admin page, gets info from the database
router.get('/', (req, res) => {
    //Find all orders and return them and order by ID so that the oldest ones are displayed first
    pool.query('SELECT * FROM "feedback" ORDER BY id DESC;' ).then((result) => {
        //send back the result from the query
        res.send(result.rows);

    }).catch((error) => {
        //log out an error in the event of an unsuccessful query
        console.log('Error GET /api/feedback', error);
        res.sendStatus(500);
    })
}) //END of GET ROUTE


//POST for new feedback submission
router.post('/', (req, res) => {

        //pull out the incoming object
    const entry = req.body;

    //incoming object looks like so:
        // {
        //   feeling: feeling,
        //   understanding: understanding,
        //   supported: supported,
        //   comments: comments
        // }

    //sanitize the database query
    const sqlText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
        VALUES ($1, $2, $3, $4);`;

    const theFeedback = [entry.feeling, entry.understanding, entry.supported, entry.comments];
    
    //send the query to the database
    pool.query(sqlText, theFeedback)
        .then((result) => {
            console.log(result);
            //send feedback in the event of a successful query
            res.status(201).send('Feedback stored in the DB');
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            //send feedback in the event of an unsuccessful query
            res.sendStatus(500);
        });

});

//ROUTE for deleting feedback from the admin page
router.delete('/:id', (req, res) => {
    //fire the query in a sanitized format, deleting by id
    pool.query('DELETE FROM "feedback" WHERE id=$1;', [req.params.id]).then((result) => {
       //send a status update in the event of a successful query
        res.sendStatus(200);
    }).catch((error) => {
        //notify the user with a status code and in the console that the query was unsuccessful
        console.log('Error DELETE /api/feedback', error);
        res.sendStatus(500);
    })
});



//ROUTE for a PUT request, to change the flagged property of the feedback
router.put('/:id', (req, res) => {
    //fire the query in a sanitized format, updating by id (toggling between T/F)
    pool.query(`UPDATE "feedback" SET "flagged" = NOT "flagged" WHERE id= $1;`, [req.params.id]).then((result) => {
       //send a status update in the event of a successful query
        res.sendStatus(200);
    }).catch((error) => {
        //notify the user with a status code and in the console that the query was unsuccessful
        console.log('Error Updating /api/feedback', error);
        res.sendStatus(500);
    })
});


module.exports = router;