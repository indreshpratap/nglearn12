const router = require('express').Router();
const db = require('../../dao');
const { SEND } = require('../helper');

module.exports = router;

/* ------------------------------- Leave mgmt ------------------------------- */

router.post('/save-leave', (req, res) => {
    let body = req.body;
    let data = {
        leaveName: body.leaveName,
        category: body.category,
        active: true
    };
    db.leaves.insert(data, (err, row) => {
        SEND(res, err, row);
    });
});

router.get('/leaves', (req, res) => {
    db.leaves.find({ }, (err, row) => {
        SEND(res, err, row);
    });
});

/* -------------------------------- User mgmt ------------------------------- */

router.post('/save-user', (req, res) => {
    let body = req.body;
    SEND(res, null, body);
});

router.get('/users', (req, res) => {
    db.users.find({}, (err, row) => {
        SEND(res, err, row);
    });
});



