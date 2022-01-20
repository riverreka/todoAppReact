import { useState } from 'react';

const Form = props => {
  const initialState = {
    name: '',
    description: '',
    state: 'pending',
  };
  const [input, setInput] = useState(initialState);

  const storeInput = e => {
    e.preventDefault();
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const submit = e => {
    e.preventDefault();
    if (input.name !== '') {
      props.handleSubmit(input);
    }
    setInput(initialState);
  };

  return (
    <form className="register-form">
      <p className="register-form__p">New Task</p>
      <label className="register-form__label" htmlFor="register-form__newtask">Title</label>
      <input
        placeholder='Add new task here...'
        type="text"
        name="name"
        value={input.name}
        className="register-form__newtask"
        onChange={storeInput}/>
      <label className="register-form__label" htmlFor="register-form__description">Details</label>
      <input
        placeholder='Details come here...'
        type="text"
        name="description"
        value={input.description}
        className="register-form__description"
        onChange={storeInput}/>
      <button className="register-form--add-button" onClick={submit} onKeyDown={submit}>Add</button>
    </form>
  );
};

export default Form;
