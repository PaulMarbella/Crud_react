import React, { useState } from 'react';

export const AddData = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [loanAmount, setLoanAmount] = useState('');
  const [interest, setInterest] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id === 'name') setName(value);
    if (id === 'loanAmount') setLoanAmount(value);
    if (id === 'interest') setInterest(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = { name, loanAmount, interest };
    onAdd(newItem);
    setName('');
    setLoanAmount('');
    setInterest(''); // Clear the form
  };

  return (
    <div className=''>
      <h3>Add New Item</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={handleChange}
            placeholder="Enter name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="loanAmount">Loan Amount</label>
          <input
            type="text"
            className="form-control"
            id="loanAmount"
            value={loanAmount}
            onChange={handleChange}
            placeholder="Enter loan amount"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="interest">Interest</label>
          <input
            type="text"
            className="form-control"
            id="interest"
            value={interest}
            onChange={handleChange}
            placeholder="Enter interest"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">Add Item</button>
      </form>
    </div>
  );
};
