const express = require("express");
const routes = express.Router();

const helpers = require('../database/helpers');

routes.post('/api/project', async (req, res, next) => {
    const project = req.body;
    try {
        const newProject = await helpers.addProject(project);
        res.status(201);
        res.json(newProject);
    } catch (e) {
        next({ status: 501, message: e });
    }
});

routes.get('/api/project/:id', async (req,res) => {
    const { id } = req.params;
    try {
        const project = await helpers.getProject(id);
        res.status(200);
        res.json(project);
    } catch (e) {
        next({ status: 500, message: e });
    }
});

module.exports = routes;