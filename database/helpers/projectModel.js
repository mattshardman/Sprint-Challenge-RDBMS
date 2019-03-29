const knex = require("knex");
const knexConfig = require("../../knexfile.js");
const db = knex(knexConfig.development);

const mappers = require("./mappers");

const addProject = async project => {
  try {
    const newProject = await db.insert(project).into("projects");
    return newProject;
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

const getProjects = async () => {
  try {
    const projects = await db({ p: "projects" }).select(
      "p.id",
      "p.name",
      "p.description",
      "p.completed"
    );
    return projects;
  } catch (e) {
    return e;
  }
};

const updateProject = async (id, changes) => {
  try {
    const updatedProject = await db("projects")
      .where({ id })
      .update(changes)
      .then(id => db('projects').where({ id }));
    return updatedProject;
  } catch (e) {
    return e;
  }
};

const deleteProject = async (id) => {
    try {
        await db("projects").where({ id }).del();
        return true;
    } catch (e) {
        next({ status: 500, message: e });
    }
}

module.exports = {
  addProject,
  getProject,
  getProjects,
  updateProject,
  deleteProject
};
