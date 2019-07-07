const router = require('express').Router();
const db = require('../../dao');
const { SEND,NOT_OK } = require('../helper');

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
    body.active  =true;
    body.role = 'user';
    body.created_at = new Date();
    db.users.findOne({username: body.username},(err,row)=>{
        if(!row || !row._id){
            db.users.insert(body,(uerror, newuser)=>{
                SEND(res,uerror,newuser);
            });
        }else {
            NOT_OK(res,err,{error:"Username already exist!"});
        }
    })
   
});

router.get('/users', (req, res) => {
    db.users.find({}, (err, row) => {
        SEND(res, err, row);
    });
});



