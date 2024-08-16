import { ValidacionClave } from "./model";

export const tieneMayusculasYMinusculas = (clave: string): ValidacionClave => {
  const arrayClave = clave.split("");
  const tieneMinusculas = arrayClave.some(
    (element) => element === element.toLowerCase() && isNaN(Number(element))
  );
  const tieneMayusculas = arrayClave.some(
    (element) => element === element.toUpperCase() && isNaN(Number(element))
  );

  if (tieneMayusculas && tieneMinusculas) {
    return { esValida: true };
  }

  return {
    esValida: false,
    error: "La clave debe de tener mayúsculas y minúsculas",
  };
};

export const tieneNumeros = (clave: string): ValidacionClave => {
  const arrayClave = clave.split("");
  const tieneNum = arrayClave.some((element) => !isNaN(Number(element)));

  if (tieneNum) {
    return { esValida: true };
  }

  return {
    esValida: false,
    error: "La clave debe de tener números",
  };
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

  let validacionClave: ValidacionClave = {
    esValida: false,
  };

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

export const tieneNombreUsuario = (
  nombreUsuario: string,
  clave: string
): ValidacionClave => {
  let validacionClave: ValidacionClave = {
    esValida: false,
  };

  if (clave.includes(nombreUsuario) === false) {
    validacionClave = {
      esValida: true,
    };
  } else {
    validacionClave.error = "La clave no debe tener el nombre del usuario";
  }

  return validacionClave;
};

export const tienePalabrasComunes = (
  clave: string,
  commonPasswords: string[]
): ValidacionClave => {
  let validacionClave: ValidacionClave = {
    esValida: false,
  };

  let palabraComunEncontrada = false;

  commonPasswords.forEach((element) => {
    if (clave.includes(element) && !palabraComunEncontrada) {
      palabraComunEncontrada = true;
      validacionClave.error = "La clave no debe de contener palabras comunes";
    }
  });

  if (!palabraComunEncontrada) {
    validacionClave = {
      esValida: true,
    };
  }

  return validacionClave;
};
