import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchPost, deletePost } from '../actions'


class PostShow extends Component {
  componentDidMount() {
    const { id } = this.props.match.params; //provided by react-router params lists all wildcard values in the url
    this.props.fetchPost(id)

  }

  onDeleteClick() {
    const { id } = this.props.match.params;
    this.props.deletePost(id, () => {
      this.props.history.push('/')
    })//programmatic navigration back to the root as a callback function to ensure the delete request is done
  }

  render () {
    const { post } = this.props
    if (!post) {
      return <div>Loading</div>
    }

    return (
      <div>
        <Link to='/' className="btn btn-primary">Back to Index</Link>
        <button to='/' className="btn btn-danger pull-xs-right" onClick={this.onDeleteClick.bind(this)}>Delete</button>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    )
  }
}

function mapStateToProps({ posts }, ownProps){
  //mapStateToProps 1st argument is application level state, and 2nd arguement is the equivalent to PostShow.props
  return { post: posts[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostShow)
