import React from 'react';
import Form from 'react-bootstrap/Form';

function Filter({ titleFilter, rateFilter, onTitleChange, onRateChange }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', padding: '1rem', backgroundColor: '#e9ecef' }}>
      <Form.Group controlId="formTitle">
        <Form.Label>Filter by Title:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter title"
          value={titleFilter}
          onChange={(e) => onTitleChange(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formRating">
        <Form.Label>Filter by Rating:</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter rating (0-5)"
          min="0"
          max="5"
          value={rateFilter}
          onChange={(e) => onRateChange(parseFloat(e.target.value))}
        />
      </Form.Group>
    </div>
  );
}

export default Filter;
