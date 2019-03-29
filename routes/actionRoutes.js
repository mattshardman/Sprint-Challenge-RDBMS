const express = require("express");

const routes = express.Router();

const helpers = require('../database/helpers/actionModel');

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

routes.put('/api/action/:id', async (req, res, next) => {
    const { id } = req.params;
    const action = req.body;
    try {
        const updatedAction = await helpers.updateAction(id, action);
        res.status(201);
        res.json(updatedAction);
    } catch (e) {
        next({ status: 501, message: e });
    }
});

routes.delete('/api/project/:id', async (req, res, next) => {
    const { id } = req.params;
    try {
        await helpers.deleteAction(id);
        res.status(200);
        res.send(`Action ${id} deleted`);
    } catch (e) {
        next({ status: 500, message: e });
    }
})

module.exports = routes;