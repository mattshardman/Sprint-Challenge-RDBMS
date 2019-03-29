const intToBool = int => (int ? true : false);

const reformattedProject = project =>
  project.reduce((acc, each) => {
    const { id, name, description, completed } = each;
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
        completed: intToBool(completed),
        actions: [actionsObj]
      };
    } else {
      acc.actions.push(actionsObj);
    }
    return acc;
  }, null);

const reformatAction = action =>
  action.reduce((acc, each) => {
    const { id, description, completed } = each;

    if (!acc) {
      acc = {
        id,
        description,
        completed: intToBool(completed),
        contexts: [each.context]
      };
    } else {
      acc.contexts.push(each.context);
    }
    return acc;
  }, null);


module.exports = { reformattedProject, reformatAction };
