

export interface CountryDigitsMap {
  [key: string]: number;
}

export interface ValidationResult {
  error: string | undefined;
  allowedDigits: number;
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
  '1': 10,  // Estados Unidos y Canadá tienen 10 dígitos (incluyendo el código de área)
  '49': 10, // Alemania tiene 10 dígitos (incluyendo el código de área)
  '33': 9,  // Francia tiene 9 dígitos (incluyendo el código de área)
  '44': 10, // Reino Unido tiene 10 dígitos (incluyendo el código de área)
  '39': 10, // Italia tiene 10 dígitos (incluyendo el código de área)
  '1C': 10,  // Canadá tiene 10 dígitos (incluyendo el código de área)
  '86': 11, // China tiene 11 dígitos (incluyendo el código de área)
  '91': 10, // India tiene 10 dígitos (incluyendo el código de área)
  '81': 10, // Japón tiene 10 dígitos (incluyendo el código de área)
  '7': 10,  // Rusia tiene 10 dígitos (incluyendo el código de área)
  '234': 10, // Nigeria tiene 10 dígitos (incluyendo el código de área)
  '27': 9,  // Sudáfrica tiene 9 dígitos (incluyendo el código de área)
  '20': 10, // Egipto tiene 10 dígitos (incluyendo el código de área)
  '61': 9,  // Australia tiene 9 dígitos (incluyendo el código de área)
  '64': 9,  // Nueva Zelanda tiene 9 dígitos (incluyendo el código de área)
  '90': 10, // Turquía tiene 10 dígitos (incluyendo el código de área)
  '82': 10, // Corea del Sur tiene 10 dígitos (incluyendo el código de área)
  '62': 11  // Indonesia tiene 11 dígitos (incluyendo el código de área)
};



export const validateName = (name: string): string | undefined => {

  if (name.trim() === '') {
    return 'El nombre no puede estar en blanco.';
  }

  const nameRegex = /^[A-Z][a-zA-Z0-9]*$/;
  if (!name.match(nameRegex)) {
    return 'El nombre debe comenzar con mayuscula, letras y números.';
  } else if (name.length > 50) {
    return 'El mensaje debe tener al menos 20 caracteres.';
  }
  return undefined;
};

export const validatePhone = (phone: string, countryCode: string): ValidationResult => {
  if (phone.trim() === '') {
    return { error: 'El número de teléfono no puede estar en blanco.', allowedDigits: 0 };
  }

  const allowedDigits = allowedDigitsByCountry[countryCode] || 0;
  const phoneDigits = phone.replace(/\D/g, ''); // Elimina los caracteres no numéricos

  const enteredDigits = phoneDigits.length;
  const extraDigits = enteredDigits - allowedDigits;

  if (extraDigits > 0) {
    const errorMessage = `El número de teléfono tiene ${extraDigits} dígitos adicionales para el código de área ${countryCode}.`;
    return { error: errorMessage, allowedDigits };
  } else if (enteredDigits < allowedDigits) {
    const remainingDigits = allowedDigits - enteredDigits;
    const errorMessage = `Faltan ${remainingDigits} dígitos en el número de teléfono`;
    return { error: errorMessage, allowedDigits };
  }

  return { error: undefined, allowedDigits };
};

export const validateEmail = (email: string): string | undefined => {
  if (email.trim() === '') {
    return 'La dirección de correo electrónico no puede estar en blanco.';
  }
  
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

