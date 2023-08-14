// import './Create.style.css';
// import React, { useState, useEffect } from 'react';
// import { useSelector, useDispatch  } from 'react-redux';
// import { getGenre } from '../../Redux/Actions';
// import { postsVideogame } from '../../Redux/Actions';

// function Create() {

//   const dispatch = useDispatch();
//   const allGenre = useSelector((state) => state.gender);


//   useEffect(() => {
//     dispatch(getGenre());
//   }, [dispatch]);


//   const [input, setInput] = useState({
//     name: "",
//     background_imagen: "",
//     description: "",
//     platforms: "",
//     releaseDate: "",
//     rating: "",
//     genres:[],
    
//   });
//   //console.log(input);



//   const [error, setError] = useState({
//     name: "",
//     background_imagen: "",
//     description: "",
//     platforms: "",
//     releaseDate: "",
//     rating: "",
//     genres: [],
//   });

//   function handleChange(e) {
//     const { name, value } = e.target;


  
//     let updateValue = e.target.value;
//     if (e.target.name === "genres" && e.target.checked) {
//       updateValue = [...input.genres, e.target.value];
//     }
//     if (e.target.name === "genres" && !e.target.checked) {
//       const updatedGenres = input.genres.filter(
//         (genre) => genre !== e.target.value
//       );
//       updateValue = updatedGenres;
//     }

//     setInput({
//       ...input,
//       [e.target.name]: updateValue,
//     });

//     setInput({
//       ...input,
//       [name]: value,
//     });

//     setError({
//       ...error,
//       [name]: "",
//     });
//   }

//   function handleSubmit(e) {
//     e.preventDefault();
//     dispatch(postsVideogame(input))
  
//     //Validación del name
//     if (input.name.trim() === "") {
//       setError({
//         ...error,
//         name: "El name es requerido",
//       });
//       return;
//     }

//     // Validación de la background_imagen
//     if (input.background_imagen.trim() === "") {
//       setError({
//         ...error,
//         background_imagen: "La URL de la background_imagen es requerida",
//       });
//       return;
//     }

//     // Validación de la descripción
//     if (input.description.trim() === "") {
//       setError({
//         ...error,
//         description: "La descripción es requerida",
//       });
//       return;
//     }

//     // Validación de las platforms
//     if (input.platforms.trim() === "") {
//       setError({
//         ...error,
//         platforms: "Las platforms son requeridas",
//       });
//       return;
//     }

//     // Validación de la fecha de lanzamiento
//     if (input.releaseDate.trim() === "") {
//       setError({
//         ...error,
//         releaseDate: "La fecha de lanzamiento es requerida",
//       });
//       return;
//     }

//     // Validación del rating
//     if (input.rating.trim() === "" || isNaN(input.rating) || input.rating < 0 || input.rating > 10) {
//       setError({
//         ...error,
//         rating: "El rating debe ser un número entre 0 y 10",
//       });
//       return;
//     }

//     // Validación de los géneros seleccionados
//     if (input.genres.length === 0) {
//       setError({
//         ...error,
//         genres: "Debes seleccionar al menos un género",
//       });
//       return;
//     }
//   }

//   return (
//     <div id="formulario-container">
//       <form>
//         <div>
//           <label>name</label>
//           <input
//             name="name"
//             value={input.name}
//             onChange={handleChange}
//             required
//           />
//           {error.name && <span className="error">{error.name}</span>}
//         </div>
//         <div>
//           <label>background_Imagen (URL)</label>
//           <input
//             name="background_imagen"
//             value={input.background_imagen}
//             onChange={handleChange}
//             required
//           />
//           {error.background_imagen && <span className="error">{error.background_imagen}</span>}
//         </div>
//         <div>
//           <label>Descripción</label>
//           <textarea
//             name="description"
//             value={input.description}
//             onChange={handleChange}
//             required
//           />
//           {error.description && <span className="error">{error.description}</span>}
//         </div>
//         <div>
//           <label>Platforms</label>
//           <input
//             name="platforms"
//             value={input.platforms}
//             onChange={handleChange}
//             required
//           />
//           {error.platforms && <span className="error">{error.platforms}</span>}
//         </div>
//         <div>
//           <label>Fecha de lanzamiento</label>
//           <input
//             type="date"
//             name="releaseDate"
//             value={input.releaseDate}
//             onChange={handleChange}
//             required
//           />
//           {error.releaseDate && <span className="error">{error.releaseDate}</span>}
//         </div>
//         <div>
//           <label>Rating</label>
//           <input
//             type="number"
//             max="5"
//             min= "0"
//             name="rating"
//             value={input.rating}
//             onChange={handleChange}
//             required
//           />
//           {error.rating && <span className="error">{error.rating}</span>}
//         </div>
// //         <div>
//           <label>Gender</label>
//            {allGenre && allGenre.map((Generos)=> <div key = {Generos.id}>
//            <input
//              type= "checkbox"
//              name="genres"
//              value={Generos.id}
//              onChange={handleChange}
//            >
//            </input>
//            <label>{Generos.name}</label>
//            </div>
//             )}
//            {error.genres && <span className="error">{error.genres}</span>}
// //         </div>
  
//         <button type="submit">Crear nuevo videojuego</button>
//       </form>
//     </div>
//   );
// }

// export default Create;
