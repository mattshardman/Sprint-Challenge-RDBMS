exports.seed = (knex, Promise) => {
    return knex('projects').del()
        .then(() => {
            return knex('projects').insert([
                { id: 1, name: "Complete sprint challenge MVP", description: "", completed: false },
                { id: 2, name: "Complete sprint challenge Stretch", description: "", completed: false }
            ])
        })
}