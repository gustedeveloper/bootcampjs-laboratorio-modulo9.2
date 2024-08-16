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
  const validaciones = [
    tieneMayusculasYMinusculas(clave),
    tieneNumeros(clave),
    tieneCaracteresEspeciales(clave),
    tieneLongitudMinima(clave),
    tieneNombreUsuario(nombreUsuario, clave),
    tienePalabrasComunes(clave, commonPasswords),
  ];

  for (const validacion of validaciones) {
    if (!validacion.esValida) {
      return validacion;
    }
  }

  return { esValida: true };
};

console.log(validarClave("password", "password", commonPasswords));
console.log(validarClave("passwordD", "passwordD", commonPasswords));
console.log(validarClave("passwordD3", "passwordD3", commonPasswords));
console.log(validarClave("passwordD3@", "passwordD3@", commonPasswords));
console.log(validarClave("PEPE", "password3D_", commonPasswords));
console.log(validarClave("PEPE", "password3D_PEPE", commonPasswords));
console.log(validarClave("PEPE", "passwordPEPE3D_", commonPasswords));
console.log(validarClave("PEPE", "aB12@_", commonPasswords));
console.log(validarClave("PEPE", "pepito3D@", commonPasswords));
console.log(validarClave("PEPE", "pepe3D@s", commonPasswords));
