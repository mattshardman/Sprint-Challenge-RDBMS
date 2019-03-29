const express = require("express");

const routes = express.Router();

const helpers = require('../database/helpers');

routes.post('/api/action', async (req, res, next) => {
    const action = req.body;
    try {
        const newAction = await helpers.addAction(action);
        res.status(201);
        res.json(newAction);
    } catch (e) {
        next({ status: 501, message: e });
    }
});

module.exports = routes;