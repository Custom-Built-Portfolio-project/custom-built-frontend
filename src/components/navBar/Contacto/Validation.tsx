export interface CountryDigitsMap {
  [key: string]: number;
}

export const allowedDigitsByCountry: CountryDigitsMap = {
  '52': 10, // México tiene 10 dígitos (incluyendo el código de área)
  '54': 10, // Argentina tiene 10 dígitos (incluyendo el código de área)
  '55': 11, // Brasil tiene 11 dígitos (incluyendo el código de área)
  '56': 9,  // Chile tiene 9 dígitos (incluyendo el código de área)
  '57': 10, // Colombia tiene 10 dígitos (incluyendo el código de área)
  '58': 10, // Venezuela tiene 10 dígitos (incluyendo el código de área)
  '51': 9,  // Perú tiene 9 dígitos (incluyendo el código de área)
  '34': 9,  // España tiene 9 dígitos (incluyendo el código de área)
  '1': 10   // Estados Unidos y Canadá tienen 10 dígitos (incluyendo el código de área)
};



export const validateName = (name: string): string | undefined => {
  const nameRegex = /^[A-Z][a-zA-Z0-9]*$/;
  if (!name.match(nameRegex)) {
    return 'El nombre debe comenzar con mayúscula y contener solo letras y números.';
  }
  return undefined;
};

export const validatePhone = (phone: string, countryCode: string): string | undefined => {
  // Obtiene la cantidad de dígitos permitidos para el país seleccionado
  const allowedDigits = allowedDigitsByCountry[countryCode];

  // Expresión regular que valida un código de área de 2 o 3 dígitos seguido de un número de teléfono con la cantidad permitida de dígitos
  const phoneRegex = new RegExp(`^[2-9]{1}[0-9]{1}\\s\\d{${allowedDigits}}$`);

  if (!phone.match(phoneRegex)) {
    return 'Número de teléfono no válido.';
  }
  return undefined;
};



export const validateEmail = (email: string): string | undefined => {
  // Expresión regular para validar una dirección de correo electrónico
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email.match(emailRegex)) {
    return 'Dirección de correo electrónico no válida.';
  }
  return undefined;
}


export const validateMessage = (message: string): string | undefined => {

  if (message.trim() === '') {
    return 'El mensaje no puede estar en blanco.';
  } else if (message.length < 20) {
    return 'El mensaje debe tener al menos 20 caracteres.';
  }
  return undefined;
};

