import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

class PostsNew extends Component {
  render() {
    return (
      <div> Post New </div>
    )
  }
}

export default reduxForm({
  form: 'PostsNewForm'  //unique name of this form
})(PostsNew)
//reduxForm functions similar to connect helper from react-redux, hook up component to the reducer formReducer
