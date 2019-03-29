const express = require("express");

const routes = express.Router();

const helpers = require('../database/helpers/actionModel');

routes.get('/api/actions', async (req, res, next) => {
    try {
        const actions = await helpers.getActions();
        res.status(200);
        res.json(actions);
    } catch (e) {
        next({ status: 500, message: e });
    }
});

routes.get('/api/action/:id', async (req, res, next) => {
    const { id } = req.params;
    try {
        const action = await helpers.getAction(id);
        res.status(200);
        res.json(action);
    } catch (e) {
        next({ status: 500, message: e });
    }
});

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