import React from 'react';

class CommentsListComponent extends React.Component {

  constructor(props) {
    super(props);
    this.index = 0;
    this.state = {comments: []};
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    var newComments = this.state.comments
    newComments.push({id: this.index++, text: this.refs.item.value})
    this.refs.item.value = '';
    this.refs.item.focus();
    this.setState({comments: newComments})
  }

  render() {
    var renderComment = (comment) => {
      return (
        <div key={comment.id}>
          {comment.id}: {comment.text}
        </div>
      )
    }
    return (
      <div>
        Comments: <span className="badge">{this.state.comments.length}</span>
        <form onSubmit={this.onSubmit}>
          <input type='text' ref='item'/>
          <input type='submit' value='Add'/>
        </form>
        <div>{this.state.comments.map(renderComment)}</div>
      </div>
    );
  }
}

export default CommentsListComponent;
