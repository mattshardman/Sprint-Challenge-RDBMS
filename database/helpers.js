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

module.exports = {
    addProject,
}
