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

  handleClose = () => {
    const { onClose } = this.props;
    if (onClose) onClose();
  };

  render() {
    return (
      <div className='container justify-content-sm-center col-6 border'>
        <div className="d-flex justify-content-between align-items-center">
          <h3 className='mt-3'>Edit Item</h3>
          <button 
            type="button" 
            className="btn btn-danger"
            onClick={this.handleClose}
            title="Close"
          >
            &times;
          </button>
        </div>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
            <label htmlFor="loanType">Loan Type</label>
            <input
              type="text"
              className="form-control"
              id="loanType"
              value={this.state.loanType}
              onChange={this.handleChange}
            />
          </div>

          <button type="submit" className="btn btn-success mt-3">Save</button>
        </form>
      </div>
    );
  }
}
