import React, { Component } from 'react'
import style from './style'

class CommentForm extends Component {
  constructor(props){
    super(props)
    this.state = {author: '', text: ''}
    this.handleAuthorChange = this.handleAuthorChange.bind(this)
    this.handleTextChange = this.handleTextChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleAuthorChange(){
    this.setState({author: e.target.value})
  }
  handleTextChange(){
    this.setState({text: e.target.value})
  }
  handleSubmit(){
    e.preventDefault
    console.log(`${this.state.author} said "${this.state.text}"`)
  }
  render() {
    return(
      <form style={style.commentForm} onSubmit={this.handleSubmit}>
        <input
          type='text'
          placeholder='your name here'
          style={style.commentFormAuthor}
          value={this.state.author}
          onChange={this.handleAuthorChange}
        />
        <input
          type='text'
          placeholder='type some text here'
          style={style.commentFormText}
          value={this.state.text}
          onChange={this.handleTextChange}
        />
        <input
          type='submit'
          style=
        />
      </form>
    )
  }
}

export default CommentForm
