const actionRoutes = require('./actionRoutes');
const projectRoutes = require('./projectRoutes');
const contextRoutes = require('./contextRoutes');

const errorHandler = (err, req, res, next) => {
    res.status(err.status);
    res.send(err.message);
}
module.exports = { actionRoutes, projectRoutes, contextRoutes, errorHandler };