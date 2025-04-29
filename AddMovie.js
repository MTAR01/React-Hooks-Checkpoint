import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import StarRatingComponent from 'react-star-rating-component';

function AddMovie({ show, handleClose, handleAdd }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [posterURL, setPosterURL] = useState('');
  const [rating, setRating] = useState(0);

  const onStarClick = (nextValue) => {
    setRating(nextValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAdd({ title, description, posterURL, rating });
    setTitle('');
    setDescription('');
    setPosterURL('');
    setRating(0);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Movie</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formTitle">
            <Form.Label>Title:</Form.Label>
            <Form.Control
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="formDescription">
            <Form.Label>Description:</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formPosterURL">
            <Form.Label>Poster URL:</Form.Label>
            <Form.Control
              type="url"
              value={posterURL}
              onChange={(e) => setPosterURL(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formRating">
            <Form.Label>Rating:</Form.Label>
            <StarRatingComponent
              name="addRating"
              starCount={5}
              value={rating}
              onStarClick={onStarClick}
              starColor="#ffc107"
              emptyStarColor="#ced4da"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Add Movie
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddMovie;
