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
    error: "La clave debe tener mayúsculas y minúsculas",
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
    error: "La clave debe tener números",
  };
};

export const tieneCaracteresEspeciales = (clave: string): ValidacionClave => {
  const caracteresEspeciales = ["@", "#", "+", "_", "..."];
  const arrayClave = clave.split("");

  const tieneCaracterEspecial = arrayClave.some((element) =>
    caracteresEspeciales.includes(element)
  );
  if (tieneCaracterEspecial) {
    return { esValida: true };
  }

  return {
    esValida: false,
    error: "La clave debe tener caracteres especiales: @, #, +, _, ...",
  };
};

export const tieneLongitudMinima = (clave: string): ValidacionClave => {
  const arrayClave = clave.split("");

  if (arrayClave.length >= 8) {
    return {
      esValida: true,
    };
  }
  return {
    esValida: false,
    error: "La clave debe tener una longitud mínima de 8 caracteres",
  };
};

export const tieneNombreUsuario = (
  nombreUsuario: string,
  clave: string
): ValidacionClave => {
  if (clave.includes(nombreUsuario) === false) {
    return {
      esValida: true,
    };
  }
  return {
    esValida: false,
    error: "La clave no debe tener el nombre del usuario",
  };
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
