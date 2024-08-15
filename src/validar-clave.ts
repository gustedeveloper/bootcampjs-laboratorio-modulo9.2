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
  const tieneCaracEspeciales = tieneCaracteresEspeciales(clave);
  const tieneLongMinima = tieneLongitudMinima(clave);
  const tieneNomUsuario = tieneNombreUsuario(nombreUsuario, clave);
  const tienePalabraComun = tienePalabrasComunes(clave, commonPasswords);
};
