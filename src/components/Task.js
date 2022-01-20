const Task = props => {
  const button = (
    <button
      className="remove-button"
      onClick={ () => { props.remove(props.index); } }
      >Remove</button>
  );

  const toggleHandler = event => {
    if (event.target.localName !== 'button') {
      props.toggle(props.index);
    }
  };

  return (
    <li className={props.state === 'done' ? 'tasks-card-li complete-task' : 'tasks-card-li'} key={props.index} onClick={toggleHandler}>
      <h3 className="task-header">{props.title}</h3>
      <p className="task-p">{props.description}</p>
      { props.state === 'done' ? button : null }
    </li>);
};

export default Task;
