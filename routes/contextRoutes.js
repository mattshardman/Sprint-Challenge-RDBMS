const express = require("express");

const routes = express.Router();

const helpers = require('../database/helpers/contextModel');

routes.post('/api/context', async (req, res, next) => {
    const context = req.body;
    console.log(context)
    try {
        const newContext = await helpers.addContext(context);
        res.status(201);
        res.json(newContext);
    } catch (e) {
        next({ status: 501, message: e });
    }
});

module.exports = routes;