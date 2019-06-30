const apiRouter = require('express').Router();
const db = require('../dao');
const { SEND } = require('./helper');
const { createToken, verifyToken,isAdmin } = require("../token-manager");

module.exports = function mountRoutes(app) {
    apiRouter.use('/admin', verifyToken,isAdmin ,require('./admin/admin.routes'));
    app.use('/api', apiRouter);
}

apiRouter.post('/login', (req, res) => {
    let body = req.body;
    console.log('Checking for user', body);
    if (body.username === 'admin' && body.password === 'admin') {
        let tokenData = createToken({ username: 'admin', role: 'admin', userId: 1 });
        let data = { username: 'Admin', role: 'admin', token: tokenData };
        SEND(res, null, data);
    } else if (body.username === 'user' && body.password === 'user') {
        let tokenData = createToken({ username: 'User One', role: 'user', userId: 2 });
        let data = { username: 'User One', role: 'user', token: tokenData };
        SEND(res, null, data);
    } else {
        SEND(res, "Invalid", { error: "Username or password not matched!" });
    }

    // db.users.findOne({ username: body.username, password: body.pwd, active: true },
    //      (err, user) => {
    //     if (err) {
    //         res.json({ status: false, error: "Internal server error" });
    //     } else if (user && user._id) {
    //         let tokenData = createToken({username:user.username,role:user.role});
    //         res.json({ token:tokenData, status: true, username: user.username, role: user.role });
    //     } else {
    //         res.json({ status: false, error: 'username password not matched!' });
    //     }
    // })

});
