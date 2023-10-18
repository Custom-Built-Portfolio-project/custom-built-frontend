import React, { useState } from 'react';
import {
  validateName,
  validatePhone,
  validateEmail,
  validateMessage,
} from './Validation';

interface Form {
  username: string;
  phone: string;
  email: string;
  message: string;
}

const Contacto: React.FC = () => {

  const [formData, setFormData] = useState<Form>({
    username: '',
    phone: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

    const { name, value } = event.target;
    let error: string | undefined;

    switch (name) {
      case 'username':
        error = validateName(value);
        break;
      case 'phone':
        error = validatePhone(value);
        break;
      case 'email':
        error = validateEmail(value);
        break;
      case 'message':
        error = validateMessage(value);
        break;
      default:
        break;
    }

    setErrors({ ...errors, [name]: error || '' });
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const nameError = validateName(formData.username);
    const phoneError = validatePhone(formData.phone);
    const emailError = validateEmail(formData.email);
    const messageError = validateMessage(formData.message);

    setErrors({
      username: nameError || '',
      phone: phoneError || '',
      email: emailError || '',
      message: messageError || '',
    });

    if (!nameError && !phoneError && !emailError && !messageError) {
      // Todas las validaciones pasan, puedes manejar el envío del formulario aquí
      console.log(formData);
    } else {
      // Las validaciones fallan, puedes mostrar mensajes de error al usuario si lo deseas
      console.log('Los datos del formulario contienen errores.');
    }
  };


  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Nombre:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            
          />
        </label>
      </div>
      <div>
        <label>
          Teléfono:
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            type="tel"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            
          />
        </label>
      </div>
      <div>
        <label>
          Mensaje:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            
          />
        </label>
      </div>

      {Object.keys(errors).map((key, index) => {
        if (errors[key]) {
          return <p key={index}>{errors[key]}</p>;
        }
        return null;
      })}

      <button type="submit">Enviar</button>
    </form>

  );
}

export default Contacto;