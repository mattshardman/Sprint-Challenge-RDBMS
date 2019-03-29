exports.seed = (knex, Promise) => {
    return knex('actions').del()
        .then(() => {
            return knex('actions').insert([
                { id: 1, description: "Create projects migration", notes: "", completed: false, project_id: 1 },
                { id: 2, description: "Create actions migration", notes: "", completed: false, project_id: 1 },
                { id: 3, description: "Create API endpoints", notes: "", completed: false, project_id: 1 },
                { id: 4, description: "Seed database", notes: "", completed: false, project_id: 2 },
                { id: 5, description: "Add remaining CRUD operations", notes: "", completed: false, project_id: 2 }
            ])
        })
}