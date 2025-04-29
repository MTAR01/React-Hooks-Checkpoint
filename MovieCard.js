import React from 'react';
import Card from 'react-bootstrap/Card';
import StarRatingComponent from 'react-star-rating-component';

function MovieCard({ movie }) {
  const cardStyle = {
    width: '18rem',
    margin: '1rem',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '0.5rem',
    overflow: 'hidden',
    backgroundColor: '#f8f9fa',
  };

  const imageStyle = {
    height: '250px',
    objectFit: 'cover',
  };

  const bodyStyle = {
    padding: '1rem',
    textAlign: 'center',
  };

  const titleStyle = {
    marginBottom: '0.5rem',
    color: '#343a40',
    fontSize: '1.2rem',
    fontWeight: 'bold',
  };

  const descriptionStyle = {
    marginBottom: '0.75rem',
    fontSize: '0.9rem',
    color: '#6c757d',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    maxHeight: '2em', // Show only two lines of description
  };

  return (
    <Card style={cardStyle}>
      <Card.Img variant="top" src={movie.posterURL} alt={movie.title} style={imageStyle} />
      <Card.Body style={bodyStyle}>
        <Card.Title style={titleStyle}>{movie.title}</Card.Title>
        <Card.Text style={descriptionStyle}>{movie.description}</Card.Text>
        <StarRatingComponent
          name="rating"
          value={movie.rating}
          starCount={5}
          editing={false}
          starColor="#ffc107"
          emptyStarColor="#ced4da"
        />
      </Card.Body>
    </Card>
  );
}

export default MovieCard;
