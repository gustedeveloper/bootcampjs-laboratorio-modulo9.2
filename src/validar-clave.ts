import "./style.css";

import {
  ValidacionClave,
  commonPasswords,
  tieneMayusculasYMinusculas,
  tieneNumeros,
  tieneCaracteresEspeciales,
  tieneLongitudMinima,
  tieneNombreUsuario,
  tienePalabrasComunes,
} from "./clave fuerte";

export const validarClave = (
  nombreUsuario: string,
  clave: string,
  commonPasswords: string[]
): ValidacionClave => {
  let validacionClave: ValidacionClave = {
    esValida: false,
  };

  const tieneMayusYMinus = tieneMayusculasYMinusculas(clave);
  const tieneNum = tieneNumeros(clave);
  const tieneCaracterEspecial = tieneCaracteresEspeciales(clave);
  const tieneLongMinima = tieneLongitudMinima(clave);
  const tieneNomUsuario = tieneNombreUsuario(nombreUsuario, clave);
  const tienePalabraComun = tienePalabrasComunes(clave, commonPasswords);

  if (
    tieneMayusYMinus.esValida === true &&
    tieneNum.esValida === true &&
    tieneCaracterEspecial.esValida === true &&
    tieneLongMinima.esValida === true &&
    tieneNomUsuario.esValida === true &&
    tienePalabraComun.esValida === true
  ) {
    validacionClave = {
      esValida: true,
    };
  } else if (tieneMayusYMinus.esValida !== true) {
    validacionClave.error = tieneMayusYMinus.error;
  } else if (tieneNum.esValida !== true) {
    validacionClave.error = tieneNum.error;
  } else if (tieneCaracterEspecial.esValida !== true) {
    validacionClave.error = tieneCaracterEspecial.error;
  } else if (tieneLongMinima.esValida !== true) {
    validacionClave.error = tieneLongMinima.error;
  } else if (tieneNomUsuario.esValida !== true) {
    validacionClave.error = tieneNomUsuario.error;
  } else if (tienePalabraComun.esValida !== true) {
    validacionClave.error = tienePalabraComun.error;
  }

  return validacionClave;
};

console.log(validarClave("password", "password", commonPasswords));
console.log(validarClave("passwordD", "passwordD", commonPasswords));
console.log(validarClave("passwordD3", "passwordD3", commonPasswords));
console.log(validarClave("passwordD3@", "passwordD3@", commonPasswords));
console.log(validarClave("PEPE", "password3D@", commonPasswords));
console.log(validarClave("PEPE", "aB12@_", commonPasswords));
console.log(validarClave("PEPE", "pepito3D@", commonPasswords));
console.log(validarClave("PEPE", "pepe3D@s", commonPasswords));
