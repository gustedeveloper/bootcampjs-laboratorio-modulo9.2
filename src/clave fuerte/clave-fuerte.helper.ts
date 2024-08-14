import { ValidacionClave } from "./model";

let validacionClave: ValidacionClave = {
  esValida: false,
};

export const tieneMayusculasYMinusculas = (clave: string): ValidacionClave => {
  let tieneMayusculas = false;
  let tieneMinusculas = false;

  for (let i = 0; i < clave.length; i++) {
    if (
      clave[i] === clave[i].toUpperCase() &&
      clave[i] !== clave[i].toLowerCase()
    ) {
      tieneMayusculas = true;
    } else if (
      clave[i] === clave[i].toLowerCase() &&
      clave[i] !== clave[i].toUpperCase()
    ) {
      tieneMinusculas = true;
    }

    if (tieneMayusculas && tieneMinusculas) {
      validacionClave = {
        esValida: true,
      };
    } else {
      validacionClave.error = "La clave debe de tener mayúsculas y minúsculas";
    }
  }
  return validacionClave;
};
