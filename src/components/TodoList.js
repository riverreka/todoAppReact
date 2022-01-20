import Task from './Task';

const TodoList = props => {
  const tasks = props.tasks.map(
    (t, i) => (
    <Task
      index={i}
      title={t.name}
      state={t.state}
      description={t.description}
      remove={props.removeTask}
      toggle={props.toggleState}
    />),
  );

  return (
    <ul className="tasks-container">
      {tasks.filter(t => t.props.state === 'pending')}
      {tasks.filter(t => t.props.state === 'done')}
    </ul>
  );
};

export default TodoList;
