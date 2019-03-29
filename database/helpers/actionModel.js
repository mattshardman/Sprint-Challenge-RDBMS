const knex = require("knex");
const knexConfig = require("../../knexfile.js");
const db = knex(knexConfig.development);

const mappers = require("./mappers");

const addAction = async action => {
  console.log(action);
  try {
    const newAction = await db.insert(action).into("actions");
    console.log(newAction);
    return newAction;
  } catch (e) {
    return e;
  }
};

const updateAction = async (id, changes) => {
    try {
      const updatedAction = await db("actions")
        .where({ id })
        .update(changes)
        .then(id => db('actions').where({ id }));
      return updatedAction;
    } catch (e) {
      return e;
    }
  };

module.exports = {
  addAction,
  updateAction
};
