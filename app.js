import React, { useState } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import AddMovie from './components/AddMovie';
import 'bootstrap/dist/css/bootstrap.min.css';
import StarRatingComponent from 'react-star-rating-component';

function App() {
  const [movies, setMovies] = useState([
    {
      title: 'The Shawshank Redemption',
      description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODCwMGQ2MTY5OTUxXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg',
      rating: 4.8,
    },
    {
      title: 'The Godfather',
      description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODYzZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg',
      rating: 4.9,
    },
    {
      title: 'Pulp Fiction',
      description: 'The lives of two mob hitmen, a boxer, a gangster\'s wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BNGNhMmVlZmItYmJlZC00YzFlLWE0YWEtODc2YmY3YmJkZTkyXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg',
      rating: 4.7,
    },
    {
      title: 'Inception',
      description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given his inverse task of planting an idea into the mind of a C.E.O.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg',
      rating: 4.6,
    },
  ]);
  const [titleFilter, setTitleFilter] = useState('');
  const [rateFilter, setRateFilter] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
    (rateFilter === '' || movie.rating >= parseFloat(rateFilter))
  );

  const handleTitleChange = (title) => {
    setTitleFilter(title);
  };

  const handleRateChange = (rate) => {
    setRateFilter(rate);
  };

  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
    setShowAddModal(false);
  };

  const handleCloseModal = () => setShowAddModal(false);
  const handleShowModal = () => setShowAddModal(true);

  return (
    <div className="App">
      <h1 style={{ textAlign: 'center', margin: '1rem 0' }}>My Favorite Movies & TV Shows</h1>
      <Filter
        titleFilter={titleFilter}
        rateFilter={rateFilter}
        onTitleChange={handleTitleChange}
        onRateChange={handleRateChange}
      />
      <div style={{ display: 'flex', justifyContent: 'center', margin: '1rem 0' }}>
        <button onClick={handleShowModal} style={{ padding: '0.5rem 1rem', fontSize: '1rem', cursor: 'pointer' }}>
          Add New Movie
        </button>
      </div>
      <MovieList movies={filteredMovies} />
      <AddMovie show={showAddModal} handleClose={handleCloseModal} handleAdd={handleAddMovie} />
    </div>
  );
}

export default App;
