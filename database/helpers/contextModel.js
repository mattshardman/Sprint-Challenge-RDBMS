const knex = require("knex");
const knexConfig = require("../../knexfile.js");
const db = knex(knexConfig.development);

const mappers = require("./mappers");

const addContext = async context => {
    try {
        const newContext = await db
            .insert(context)
            .into('contexts');

        return newContext;
    } catch (e) {
        return e;
    }
}

module.exports = { 
    addContext
}