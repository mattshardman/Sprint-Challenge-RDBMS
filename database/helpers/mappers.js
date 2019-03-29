const intToBool = int => (int ? true : false);

const reformattedProject = project =>
  project.reduce((acc, each) => {
    const { id, name, description } = each;
    const actionsObj = {
      id: each.action_id,
      description: each.action_description,
      notes: each.action_notes,
      completed: intToBool(each.action_completed)
    };

    if (!acc) {
      acc = {
        id,
        name,
        description,
        completed: intToBool(each.completed),
        actions: [actionsObj]
      };
    } else {
      acc.actions.push(actionsObj);
    }
    return acc;
  }, null);

module.exports = { reformattedProject };
