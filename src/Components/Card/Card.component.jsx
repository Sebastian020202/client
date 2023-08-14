import { Link } from 'react-router-dom';
import './Card.style.css';


const Card  = ({id, name, genres, background_image, onClose, rating} ) => { 

  return (
     
     <div className= 'card-container'>

        <Link to = {`/home/${id}`}> 
        <div className = 'face front'>
           <img src={background_image} alt=""/> 
        </div>
         <div className ='face back'>
           <p> Nombre: {name}</p>
           <p> Género: {genres.join(", ")}</p>
           <p> Rating: {rating}</p>
         </div>
         </Link>
     </div>
  );
}
export default Card;