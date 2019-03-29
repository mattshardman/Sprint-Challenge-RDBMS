const knex = require("knex");
const knexConfig = require("../knexfile.js");
const db = knex(knexConfig.development);

const addProject = async project => {
  try {
    const newProject = await db.insert(project).into("projects");
    console.log(newProject);
    return newProject;
  } catch (e) {
      console.log(e)
    return e;
  }
};

const addAction = async action => {
    try {
      const newAction = await db.insert(action).into("actions");
      return newAction;
    } catch (e) {
      return e;
    }
  };

const getProjects = async () => {
    try {
        const projects = await db("projects");
        return projects;
    } catch (e) {
        return e;
    }
}

addAction({ description: "do something", completed: false, notes: "", project_id: 1 });

module.exports = {
    addProject,
}
