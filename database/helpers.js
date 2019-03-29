const knex = require("knex");
const knexConfig = require("../knexfile.js");
const db = knex(knexConfig.development);

const mappers = require("./mappers");

const addProject = async project => {
  try {
    const newProject = await db.insert(project).into("projects");
    console.log(newProject);
    return newProject;
  } catch (e) {
    console.log(e);
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

const getProject = async id => {
  try {
    const project = await db({ p: "projects" })
      .where("p.id", id)
      .select(
        "p.id",
        "p.name",
        "p.description",
        "p.completed",
        { action_id: "actions.id" },
        {
          action_description: "actions.description "
        },
        {
          action_notes: "actions.notes"
        },
        {
          action_completed: "actions.completed"
        }
      )
      .innerJoin("actions", "p.id", "actions.project_id")
      .then(result => mappers.reformattedProject(result));
    return project;
  } catch (e) {
    return e;
  }
};

module.exports = {
  addProject,
  addAction,
  getProject,
};
