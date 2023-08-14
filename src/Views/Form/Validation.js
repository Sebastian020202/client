// const Validate = (input) => {
//     let errors = {}
//     if (!input.name) {
//       errors.name = 'Ingresa el nombre de tu Juego'
//     }
  
//     if (input.types.length < 1 || input.types.length > 3) {
//       errors.types = 'Tu Juego debe tener minimo 1 genero'
//     }
//     return errors
//   }
  
//   export default Validate
  

const Validation = (videoGame) => {
    let errors = {};
    if (!videoGame.name || videoGame.name.length > 40) {
      errors.name = "¡El nombre es invalido!";
    }
    if (!videoGame.description || videoGame.description.length > 250) {
      errors.description =
        "¡Este campo debe contener minimo 1 caracter y maximo 250 caracteres!";
    }
    if (!videoGame.platforms || videoGame.platforms.length > 35) {
      errors.platforms = "¡Este campo no debe ser mayor a 35 caracteres!";
    }
    if (!/\.(jpg|jpeg|png|gif)$/i.test(videoGame.background_image)) {
      errors.background_image =
        "¡Este campo solo permite formatos jpg,jpeg,png, gif!";
    }
    // if (
    //   /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/(19|20)\d{2}$/.test(
    //     videoGame.released
    //   )
    // ) {
    //   errors.released = "hola";
    // }
    if (!/^[0-5](\.\d+)?$/.test(videoGame.rating)) {
      errors.rating = "¡Este campo debe ser un número entre 1 y 5!";
    }
    if (!videoGame.genres) {
      errors.genres = "Debes elegir minimo un genero";
    }
    return errors;
  };
  
  export default Validation;