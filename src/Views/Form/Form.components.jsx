import { useState } from "react";
import Validation from "../../Views/Form/Validation";
import { getUsers, postGames } from "../../Redux/Actions";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Form.style.css"; 

function CreateGame() {
  const dispatch = useDispatch();

  const genres = useSelector((state) => state.genres);

  const [videoGame, setVideoGame] = useState({
    name: "",
    description: "",
    platforms: "",
    background_image: "",
    released: "",
    rating: "",
    genres: [],
  });

  const [errors, setErrors] = useState({
    name: "",
    description: "",
    platforms: "",
    background_image: "",
    released: "",
    rating: "",
    genres: [],
  });
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);


  const handleSelectPlatforms = (e) => {
    setVideoGame({
      ...videoGame,
      platforms: [...videoGame.platforms, e.target.value],
    });
  };

  const handleInputChange = (e) => {
    let updateValue = e.target.value;
    if (e.target.name === "genres" && e.target.checked) {
      updateValue = [...videoGame.genres, e.target.value];
    }
    if (e.target.name === "genres" && !e.target.checked) {
      const updatedGenres = videoGame.genres.filter(
        (genre) => genre !== e.target.value
      );
      updateValue = updatedGenres;
    }

    setVideoGame({
      ...videoGame,
      [e.target.name]: updateValue,
    });

    setErrors(
      Validation({
        ...videoGame,
        [e.target.name]: updateValue,
      })
    );
  };
  const handleSubmit = (e) => {
    dispatch(postGames(videoGame));
  };
  return (
    <div className="contain-form">
      <h1>
        Formulario para la creación de un videojuego
      </h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="namevideogame">
            Nombre:
          </label>
          <input
          
            id="namevideogame"
            type="text"
            name="name"
            value={videoGame.name}
            onChange={handleInputChange}
          />
          <span>{errors.name}</span>
        </div>
        <div>
          <label htmlFor="description">
            Descripcion:
          </label>
          <input
            
            id="description"
            type="text"
            name="description"
            value={videoGame.description}
            onChange={handleInputChange}
          />
          <span>{errors.description}</span>
        </div>

        <div>
          <label htmlFor="image">Imagen:</label>
          <input
            id="image"
            type="text"
            name="background_image"
            value={videoGame.background_image}
            onChange={handleInputChange}
          />
          <span>{errors.background_image}</span>
        </div>
        <div>
          <label htmlFor="released">Lanzamiento:</label>
          <input
            placeholder="dd/mm/aa"
            id="released"
            type="date"
            min="1900-01-01"
            max="2023-07-02"
            name="released"
            value={videoGame.released}
            onChange={handleInputChange}
          />
          <span>{errors.released}</span>
        </div>
        <div>
          <label htmlFor="rating">Puntaje:</label>
          <input
            id="rating"
            type="number"
            max="5"
            min="0"
            name="rating"
            value={videoGame.rating}
            onChange={handleInputChange}
          />
          <span>{errors.rating}</span>
        </div>


        <div>
          <label>Platforms: </label>
        
          <select onClick={handleSelectPlatforms}>
          <option disabled selected>
        
        </option>
            <option> Xbox </option>
            <option> PC </option>
            <option>  PlayStation 5 </option>
            <option> Xbox Series S/X </option>
            <option>  PlayStation 4  </option>
            <option> PlayStation 3  </option>
            <option>  Xbox 360 </option>
            <option>  Xbox One </option>

          </select>
          
        </div>
        <div>
          <label>Generos:</label>
          {genres &&
            genres.map((genre) => (
              <div key={genre.id}>
                <input
                  type="checkbox"
                  value={genre.id}
                  name="genres"
                  onChange={handleInputChange}
                />
                <label>{genre.name}</label>
                <span>{errors.genres}</span>
              </div>
            ))}
        </div>
        <Link to="/home">
          <button>Home</button>
        </Link>
        {errors.name ||
        errors.description ||
        errors.platforms ||
        errors.released ||
        errors.rating ||
        errors.background_image ? null : (
          <button type="submit">
            {" "}
            Enviar
          </button>
        )}
      </form>
    </div>
  );
}

export default CreateGame;