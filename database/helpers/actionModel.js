const knex = require("knex");
const knexConfig = require("../../knexfile.js");
const db = knex(knexConfig.development);

const mappers = require("./mappers");

const getAction = async id => {
  try {
    const action = await db("actions")
      .where({ id });
    return action;
  } catch (e) {
    return e;
  }
};

const getActions = async () => {
  try {
    const actions = await db("actions");
    return actions;
  } catch (e) {
    return e;
  }
};

const addAction = async action => {
  const { contexts, ...actionToAdd } = action; 
  try {
    const newActionId = await db.insert(actionToAdd).into("actions");
    const newContexts = await db.insert({ action_id: newActionId, context_id: contexts[0] }).into("action-contexts");
    console.log(newContexts)
    return newActionId;
  } catch (e) {
    console.log(e)
    return e;
  }
};

const updateAction = async (id, changes) => {
    try {
      const updatedAction = await db("actions")
        .where({ id })
        .update(changes)
        .then(() => db('actions').where({ id }));
      return updatedAction;
    } catch (e) {
      return e;
    }
  };

const deleteAction = async (id) => {
    try {
        db("actions").where({ id }).del();
    } catch (e) {
        next({ status: 500, message: e });
    }
}

module.exports = {
  getAction,
  getActions,
  addAction,
  updateAction,
  deleteAction
};
