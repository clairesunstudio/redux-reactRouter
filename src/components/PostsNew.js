import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { createPost } from '../actions'

class PostsNew extends Component {
  renderField(field) {
    //field is the props passed from the Field instance
    const { meta: { touched, error } }= field
    const className = `form-group ${touched && error ? 'has-danger': ''}`
    return(
      <div className={className}>
        <label>{field.label}</label>
        <input className="form-control"
          type="text"
          {...field.input}
        />
        <div className='text-help'>{touched ? error : ''}</div>
      </div>
    )
  }

  onSubmit(values) {
    this.props.createPost(values)
  }

  render() {
    const { handleSubmit } = this.props
    //this props is passed from redux-form via reduxForm
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
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
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className='btn btn-danger'>Cancel</Link>
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
  //reduxForm function similar to connect helper from react-redux, hook up component to the reducer formReducer
  validate, //pass validate function as an option to reduxForm
  form: 'PostsNewForm'  //unique name of this form
})(
  connect(null, { createPost })(PostsNew)
)
//stack connect helpers together
