import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

class PostsNew extends Component {
  renderField(field) {
    //field is the props passed from the Field instance
    return(
      <div className="form-group">
        <label>{field.label}</label>
        <input className="form-control"
          type="text"
          {...field.input}
        />
      </div>
    )
  }

  render() {
    return (
      <form>
        <Field
          label="Title"
          name="title"
          component={this.renderField}
        />
        <Field
          label="Categories"
          name="categories"
          component={this.renderField}
        />
        <Field
          label="Post Content"
          name="content"
          component={this.renderField}
        />
      </form>
    )
  }
}

function validate(values) {
  //create an empty errors object
  const error = {};

  if (!values.title) {
    error.title = "Enter a title!"
  }
  if (!values.categories) {
    error.categories = "Enter some categories!"
  }
  if (!values.content) {
    error.content = "Enter some content please!"
  }

  //if errors is empty, form is valid
  //if errors has *any* properties, redux form assumes form is invalid
  return error
}


export default reduxForm({
  validate, //pass validate function as an option to reduxForm
  form: 'PostsNewForm'  //unique name of this form
})(PostsNew)
//reduxForm function similar to connect helper from react-redux, hook up component to the reducer formReducer
