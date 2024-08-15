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

export const tieneCaracteresEspeciales = (clave: string): ValidacionClave => {
  const caracteresEspeciales = ["@", "#", "+", "_", "..."];
  const arrayClave = clave.split("");
  let validacionClave: ValidacionClave = {
    esValida: false,
  };
  if (arrayClave.some((element) => caracteresEspeciales.includes(element))) {
    validacionClave = {
      esValida: true,
    };
  } else {
    validacionClave.error =
      "La clave debe de tener caracteres especiales: @, #, +, _, ...";
  }

  return validacionClave;
};

export const tieneLongitudMinima = (clave: string): ValidacionClave => {
  const arrayClave = clave.split("");
  if (arrayClave.length >= 8) {
    validacionClave = {
      esValida: true,
    };
  } else {
    validacionClave.error =
      "La clave debe de tener una longitud mínima de 8 caracteres";
  }

  return validacionClave;
};

console.log(tieneLongitudMinima("34"));
