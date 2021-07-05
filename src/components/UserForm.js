import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";

const UserForm = withRouter(({ history, ...props }) => {
  const { initialState, actionType, id } = props;
  const [formFields, setFormFields] = useState({});
  useEffect(() => {
    setFormFields(initialState);
  }, [initialState]);

  const dispatch = useDispatch();

  function handleChange(e) {
    let { value, name } = e.target;
    setFormFields({
      ...formFields,
      [name]: value,
    });
  }

  function formHandler(e) {
    e.preventDefault();
    dispatch(actionType({ user: formFields, id: id }));
    history.push("/");
  }
  return (
    <>
      {formFields && (
        <form onSubmit={formHandler}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="input-block"
              placeholder="Enter User Name"
              id="name"
              name="name"
              value={formFields.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="surname">Surname</label>
            <input
              type="text"
              className="input-block"
              placeholder="Enter User Surname"
              id="surname"
              name="surname"
              value={formFields.surname}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="desc">User Description</label>
            <textarea
              className="no-resize input-block"
              placeholder="Enter User Description"
              id="desc"
              name="desc"
              value={formFields.desc}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className="form-group">
            <button className="btn-large">Submit</button>
          </div>
        </form>
      )}
    </>
  );
});

export default UserForm;
