import React, { useState } from 'react';

export const AddData = ({ onAdd }) => {
  const [loanType, setLoanType] = useState('');


  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id === 'loanType') setLoanType(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = { loanType };
    onAdd(newItem);

    setLoanType('');

  };

  return (
    <div className='m-5'>
      <h4><em>Add New Item</em></h4>
      <form onSubmit={handleSubmit}>
      
        <div className="form-group">
          <label htmlFor="loanType">Loan Type</label>
          <input
            type="text"
            className="form-control"
            id="loanType"
            value={loanType}
            onChange={handleChange}
            placeholder="Enter loan Type"
            required
          />
        </div>
     
        <button type="submit" className="btn btn-primary mt-3">Add Item</button>
      </form>
    </div>
  );
};
