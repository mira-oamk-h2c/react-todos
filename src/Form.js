import React, { Component } from 'react'

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: ""
    }
  }

  handleSubmit = (event) => {
    this.props.add(this.state.title, this.state.description);
    this.setState({
      title: "",
      description: ""
    })
    event.preventDefault();
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <form className="mb-3" onSubmit={this.handleSubmit}>
        <div>
          <label className="form-label">Title</label>
          <input className="form-control mb-3" name="title" value={this.state.title} onChange={this.handleChange} />
        </div>
        <div>
          <label className="form-label">Description</label>
          <textarea className="form-control mb-3" name="description" value={this.state.description} onChange={this.handleChange} />
        </div>
        <button className="btn btn-info mt-3">Add</button>
      </form>
    )
  }
}
