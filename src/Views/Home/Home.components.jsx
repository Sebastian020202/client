import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers, filterGameGenres, getGenres} from '../../Redux/Actions';
import Navbar from '../../Components/Navbar/Navbar.components';
import Cards from '../../Components/Cards/Cards.components';
import Paginacion from '../../Components/Paginacion/Paginacion.components';
import DropdownFilter from '../../Components/DropdownFilter/DropdownFilter.components';
import './Home.style.css';
import { Link } from 'react-router-dom';
import crearJuego from '../../Components/asets/CREATE_VIDEO_GAME__1_-removebg-preview.png';
import FiltroGenre from '../../Components/filtroGenre/FiltroGenre'
// import FiltroRating from '../../Components/FiltroRating/FiltroRating';



function Home() {
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.allUsers);
  const genres = useSelector((state) => state.genres);
  const [searchString, setSearchString] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 8;
  const [selectedGenre, setSelectedGenre] = useState(''); // Estado para el género seleccionado
  const [sortBy, setSortBy] = useState('asc'); // Estado para el tipo de orden (ascendente o descendente)
  const [sortByRating, setSortByRating] = useState(false); // Estado para el filtro por rating
  const [sortDirection, setSortDirection] = useState('asc');
  const [maxRating, setMaxRating] = useState('');
  



  useEffect(() => {
    dispatch(getUsers());
    dispatch(getGenres());
  }, [dispatch]);

  const usersList = Array.isArray(allUsers) ? allUsers : [];

  const filterGender = (event) => {
    setSelectedGenre(event.target.value);
  };
  const handleSortAscending = () => {
    setSortDirection('asc');
  };
  
  const handleSortDescending = () => {
    setSortDirection('desc');
  };

  const handleMaxRatingChange = (event) => {
    setMaxRating(event.target.value);
  };
  


  // Filtrar por género
  const handleFilterByGenre = (genreId) => {
    setSelectedGenre(genreId);
  };

  // Ordenar alfabéticamente
  const handleSortByName = () => {
    setSortBy((prevSort) => (prevSort === 'asc' ? 'desc' : 'asc'));
  };

  // Ordenar por rating
  const handleSortByRating = () => {
    setSortByRating((prevState) => !prevState);
  };

  const filterByMaxRating = (users) => {
    if (!maxRating) {
      return users;
    }
    return users.filter((user) => user.rating <= parseFloat(maxRating));
  };
  // Lógica para aplicar los filtros y ordenamiento
  let filteredUsers = usersList;
  if (selectedGenre) {
    filteredUsers = filteredUsers.filter((user) => user.genres && user.genres.includes(selectedGenre));
    dispatch(filterGameGenres(selectedGenre));
  }
  if (sortBy === 'asc') {
    filteredUsers.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === 'desc') {
    filteredUsers.sort((a, b) => b.name.localeCompare(a.name));
  }
  if (sortByRating) {
    filteredUsers.sort((a, b) => b.rating - a.rating);
  }
  filteredUsers = filterByMaxRating(filteredUsers);  


  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const paginado = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="home">
      <h2 className="home-title">Home</h2>
    
  


    <FiltroGenre
    genres={genres}
    />

      {/* Agregar el componente DropdownFilter para los filtros */}
      <DropdownFilter
        maxRating={maxRating}
        handleMaxRatingChange={handleMaxRatingChange}
        genres={genres}
        selectedGenre={selectedGenre}
        handleSortAscending={handleSortAscending}
        handleSortDescending={handleSortDescending}
        filterGender={handleFilterByGenre}
        handleSortByName={handleSortByName}
        handleSortByRating={handleSortByRating}
        sortBy={sortBy}
        sortByRating={sortByRating}
      />

      <Cards allUsers={currentUsers} />
      <Navbar />


      <div className="pagination-container">
        <Paginacion gamePerPage={usersPerPage} games={filteredUsers.length} paginado={paginado} />
      </div>

      <Link to="/form">
  <button className="create-game-button create-game-btn"></button>
      </Link>

    </div>
  );
}

export default Home;
