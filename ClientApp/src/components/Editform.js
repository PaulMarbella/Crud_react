import React, { Component } from 'react';

export class EditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props.item 
    };
  }

  handleChange = (e) => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { onSave } = this.props;
    onSave(this.state);
  };

  render() {
    // const { id } = this.props;
    // eslint-disable-next-line
    return (
        <div className='container justify-content-sm-center col-6 border'>
        <h3 className='mt-3 row'>Edit Item</h3>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="loanAmount">Loan Amount</label>
            <input
              type="text"
              className="form-control"
              id="loanAmount"
              value={this.state.loanAmount}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="interest">Interest</label>
            <input
              type="text"
              className="form-control"
              id="interest"
              value={this.state.interest}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit" className="btn btn-success mt-3">Save</button>
        </form>
      </div>
    );
  }
}
