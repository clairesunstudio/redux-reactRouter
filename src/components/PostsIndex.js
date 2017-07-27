import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts()
    //fetch data one time after react component is first rendered. fetch data is asychronous operation,
    //react eagerly renders component so no matter componentDidMount or componentWillMount the component will be rendered once before data is successfully fetched
  }
  render() {
    console.log(this.props.posts)
    return (
      <div>
      Posts Index
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { posts: state.posts}
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex)
//shortcut to hook up action creator function into a component instead of creating a seperate mapDispatchToProps func and use bindActionCreator method from 'redux'
