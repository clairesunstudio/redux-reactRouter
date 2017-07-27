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

export default reduxForm({
  form: 'PostsNewForm'  //unique name of this form
})(PostsNew)
//reduxForm function similar to connect helper from react-redux, hook up component to the reducer formReducer
