import React, { useState, useEffect } from 'react';
import { EditForm } from './Editform';
import { AddData } from './addData';

export const LoanTable = () => {
  const [data, setData] = useState([]);
  const [editingItem, setEditingItem] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const API_URL = 'http://localhost:5146/api/loan';

  useEffect(() => {
    fetchLoans();
  }, []);

  const fetchLoans = async () => {
    setLoading(true);
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const json = await response.json();
      setData(json);
      setError(null);
    } catch (error) {
      setError('Error fetching loans: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = async (newItem) => {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(newItem),
      });
      if (!response.ok) throw new Error('Network response was not ok');
      const addedItem = await response.json();
      setData((prevData) => [...prevData, addedItem]);
      setError(null);
    } catch (error) {
      setError('Error adding loan: ' + error.message);
    }
  };

  const handleEdit = (id) => {
    const item = data.find((item) => item.id === id);
    setEditingItem(item);
  };

  const handleSave = async (updatedItem) => {
    try {
      const response = await fetch(`${API_URL}/${updatedItem.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(updatedItem),
      });
      if (!response.ok) throw new Error('Network response was not ok');
      const savedItem = await response.json();
      setData((prevData) =>
        prevData.map((item) => (item.id === updatedItem.id ? savedItem : item))
      );
      setEditingItem(null);
      setError(null);
    } catch (error) {
      setError('Error updating loan: ' + error.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Network response was not ok');
      setData((prevData) => prevData.filter((item) => item.id !== id));
      setError(null);
    } catch (error) {
      setError('Error deleting loan: ' + error.message);
    }
  };

  // Function to close the EditForm
  const handleCloseEditForm = () => {
    setEditingItem(null);
  };

  return (
    <div className='mt-3'>
      <div className="d-flex justify-content-around col-12">
        <AddData onAdd={handleAdd} />
        <table className="table table-striped">
          <thead className="thead-dark">
            <tr>
              <th>#</th>
              <th>Loan Type</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="5">Loading...</td>
              </tr>
            ) : error ? (
              <tr>
                <td colSpan="5">{error}</td>
              </tr>
            ) : (
              data.map((item) => (
                <tr key={item.id}>
                  <th>{item.id}</th>
                  <td>{item.loanType}</td>
                  <td>
                    <button
                      className="btn btn-warning btn-sm me-2"
                      onClick={() => handleEdit(item.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      {editingItem && (
        <EditForm item={editingItem} onSave={handleSave} onClose={handleCloseEditForm} />
      )}
    </div>
  );
};
