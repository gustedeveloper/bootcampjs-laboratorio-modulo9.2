import { ValidacionClave } from "./model";

export const tieneMayusculasYMinusculas = (clave: string): ValidacionClave => {
  let tieneMayusculas = false;
  let tieneMinusculas = false;

  let validacionClave: ValidacionClave = {
    esValida: false,
  };

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
