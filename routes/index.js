const actionRoutes = require('./actionRoutes');
const projectRoutes = require('./projectRoutes');

const errorHandler = (err, req, res, next) => {
    res.status(err.status);
    res.send(err.message);
}
module.exports = { actionRoutes, projectRoutes, errorHandler };