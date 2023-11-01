import React, { useState } from 'react';
import axios from 'axios'; // Asegúrate de tener axios instalado

import { validateUsername, validatePassword } from './Validation';

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });

    if (name === 'username') {
      const usernameValidation = validateUsername(value);
      setUsernameError(usernameValidation.message);
    } else if (name === 'password') {
      const passwordValidation = validatePassword(value);
      setPasswordError(passwordValidation.message);
    }
  };

  const handleSubmit = async (event: React.FormEvent): Promise<void> => {
    event.preventDefault();

    const { username, password } = formData;

    const usernameValidation = validateUsername(username);
    const passwordValidation = validatePassword(password);

    if (!usernameValidation.isValid) {
      setUsernameError(usernameValidation.message);
      return;
    } else {
      setUsernameError('');
    }

    if (!passwordValidation.isValid) {
      setPasswordError(passwordValidation.message);
      return;
    } else {
      setPasswordError('');
    }

    try {
      // Verificar si el usuario ya está registrado y si la contraseña coincide
      const response = await axios.get(`/api/usuarios/verificar?username=${username}&password=${password}`);

      if (response.data.existe) {
        setUsernameError('Este usuario ya está registrado.');
        return;
      }

      // Si el usuario no está registrado, enviar datos al backend para el registro
      await axios.post('/api/usuarios/registro', { username, password });
      console.log('Registro exitoso!');
    } catch (error) {
      setUsernameError('Error al registrar. Por favor, inténtalo de nuevo más tarde.');
    }
  };

  return (
    <form onSubmit={handleSubmit} >
      {/* Campos del formulario y manejo de errores */}
      <div>
        <label>Nombre de Usuario:</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
        />
        {usernameError && <p>{usernameError}</p>}
      </div>
      <div>
        <label>Contraseña:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
        {passwordError && <p>{passwordError}</p>}
      </div>
      <button type="submit">Registrarse</button>
    </form>
  );
};

export default RegistrationForm;
