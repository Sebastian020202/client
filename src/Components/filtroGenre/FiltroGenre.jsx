import { useDispatch,} from "react-redux";
import { filterByGenre } from "../../Redux/Actions";
import "./FiltroGenre.style.css"; // Importar el archivo CSS

function FiltroGenre({ genres }) {
  const dispatch = useDispatch();

  const handleFilter = (event) => {
    dispatch(filterByGenre(event.target.value));
  };

  return (
    <div className="select-container">
      <div className="select-title">Géneros</div>
      <select className="select-genres" onChange={handleFilter}>
        <option disabled selected>
          Seleccionar género
        </option>
        {genres?.map((genre, index) => (
          <option key={index} value={genre.name}>
            {genre.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default FiltroGenre;
