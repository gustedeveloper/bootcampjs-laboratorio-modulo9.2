import { ValidacionClave } from "./model";

let validacionClave: ValidacionClave = {
  esValida: false,
};

export const tieneMayusculasYMinusculas = (clave: string): ValidacionClave => {
  let tieneMayusculas = false;
  let tieneMinusculas = false;

  const arrayClave = clave.split("");
  if (
    arrayClave.find(
      (element) => element === element.toLowerCase() && isNaN(Number(element))
    )
  ) {
    tieneMinusculas = true;
  }

  if (
    arrayClave.find(
      (element) => element === element.toUpperCase() && isNaN(Number(element))
    )
  ) {
    tieneMayusculas = true;
  }

  if (tieneMayusculas && tieneMinusculas) {
    validacionClave = {
      esValida: true,
    };
  } else {
    validacionClave.error = "La clave debe de tener mayúsculas y minúsculas";
  }

  return validacionClave;
};

export const tieneNumeros = (clave: string): ValidacionClave => {
  let validacionClave: ValidacionClave = {
    esValida: false,
  };
  const arrayClave = clave.split("");
  if (arrayClave.find((element) => !isNaN(Number(element)))) {
    validacionClave = {
      esValida: true,
    };
  } else {
    validacionClave.error = "La clave debe de tener números";
  }

  return validacionClave;
};
