const apiRouter = require('express').Router();

module.exports = function mountRoutes(app) {
    apiRouter.use('/admin', require('./admin/admin.routes'));
    app.use('/api', apiRouter);
}