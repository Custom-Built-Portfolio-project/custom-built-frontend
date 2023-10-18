export const validateName = (name: string): string | undefined => {
  const nameRegex = /^[A-Z][a-zA-Z0-9]*$/;
  if (!name.match(nameRegex)) {
    return 'El nombre debe comenzar con mayúscula y contener solo letras y números.';
  }
  return undefined;
};

export const validatePhone = (phone: string): string | undefined => {
  // Expresión regular que permite números de teléfono de celular y teléfono fijo en diferentes formatos
  const phoneRegex = /^(?:(?:\+|0{0,2})\d{1,3})?[-.\s]?\(?\d{2,3}\)?[-.\s]?\d{3,4}[-.\s]?\d{3,4}$/;

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

