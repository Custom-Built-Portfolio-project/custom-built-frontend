

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
  '1': 10   // Estados Unidos y Canadá tienen 10 dígitos (incluyendo el código de área)
};



export const validateName = (name: string): string | undefined => {
  const nameRegex = /^[A-Z][a-zA-Z0-9]*$/;
  if (!name.match(nameRegex)) {
    return 'El nombre debe comenzar con mayuscula, letras y números.';
  } else if (name.length > 50) {
    return 'El mensaje debe tener al menos 20 caracteres.';
  }
  return undefined;
};

export const validatePhone = (phone: string, countryCode: string): ValidationResult => {
  const allowedDigits = allowedDigitsByCountry[countryCode] || 0;
  const phoneDigits = phone.replace(/\D/g, ''); // Elimina los caracteres no numéricos

  if (phoneDigits.length !== allowedDigits) {
    const remainingDigits = allowedDigits - phoneDigits.length;
    const errorMessage = `Faltan ${remainingDigits} dígitos en el número de teléfono.`;
    return { error: errorMessage, allowedDigits };
  }

  return { error: undefined, allowedDigits };
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

