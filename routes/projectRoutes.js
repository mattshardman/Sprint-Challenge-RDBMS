const express = require("express");
const routes = express.Router();

const helpers = require('../database/helpers/projectModel');

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

routes.get('/api/projects', async (req, res) => {
    try {
        const projects = await helpers.getProjects();
        res.status(200);
        res.json(projects);
    } catch (e) {
        next({ status: 500, message: e });
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

routes.put('/api/project/:id', async (req, res, next) => {
    const { id } = req.params;
    const project = req.body;
    try {
        const updatedProject = await helpers.updateProject(id, project);
        res.status(201);
        res.json(updatedProject);
    } catch (e) {
        next({ status: 501, message: e });
    }
});

module.exports = routes;