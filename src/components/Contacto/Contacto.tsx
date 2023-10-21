import React, { useState } from 'react';
import {
  validateName,
  validatePhone,
  validateEmail,
  validateMessage,
} from './Validation';

interface Form {
  username: string;
  phoneCode: string;
  phone: string;
  email: string;
  message: string;
}

const Contacto: React.FC = () => {

  const [formData, setFormData] = useState<Form>({
    username: '',
    phoneCode: '52',
    phone: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {

    const { name, value } = event.target;
    let error: string | undefined;

    if (name === 'phoneCode') {
      // Manejar cambios en el código de área
      setFormData(prevState => ({
        ...prevState,
        [name]: value,
        phone: value === '+1' ? '' : prevState.phone,
      }));
    } else if (name === 'phone') {
      const phoneValidationResult = validatePhone(`${formData.phoneCode} ${value}`, formData.phoneCode);
      error = phoneValidationResult.error;
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: error || '',
      }));
      setFormData(prevState => ({
        ...prevState,
        [name]: value,
      }));
    } else {
      // Validar otros campos como 'username', 'email' y 'message'
      switch (name) {
        case 'username':
          error = validateName(value);
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
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: error || '',
      }));
      setFormData(prevState => ({
        ...prevState,
        [name]: value,
      }));
    }


  };



  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Obtén el código de país del objeto formData
    const countryCode = formData.phoneCode;

    const nameError = validateName(formData.username);
    const phoneError = validatePhone(`${formData.phoneCode} ${formData.phone}`, countryCode);
    const emailError = validateEmail(formData.email);
    const messageError = validateMessage(formData.message);

    setErrors({
      username: nameError || '',
      phone: phoneError.error || '',
      email: emailError || '',
      message: messageError || '',
    });

    // Verifica si no hay errores
    if (!nameError && !phoneError.error && !emailError && !messageError) {
      // Condición adicional: No hay errores, puedes manejar el envío del formulario aquí
      console.log(formData);
    } else {
      // Condición adicional: Muestra un mensaje de error si hay errores
      const errorMessage = 'Los datos del formulario contienen errores o faltan campos.';
      console.log(errorMessage);
      setErrors({ ...errors, general: errorMessage });
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
        <label htmlFor="codigoArea">
          Código de Área:
          <select
            id="codigoArea"
            name="phoneCode"  // Corregido: el nombre del campo debe ser phoneCode, no phone
            value={formData.phoneCode}  // Corregido: value debe ser formData.phoneCode en lugar de formData.phone
            onChange={handleInputChange}  // Agrega el evento onChange para manejar cambios en el código de área
          >
            <option value="52">+52 (México)</option>
            <option value="54">+54 (Argentina)</option>
            <option value="55">+55 (Brasil)</option>
            <option value="56">+56 (Chile)</option>
            <option value="57">+57 (Colombia)</option>
            <option value="58">+58 (Venezuela)</option>
            <option value="51">+51 (Perú)</option>
            <option value="34">+34 (España)</option>
            <option value="1">+1 (Estados Unidos y Canadá)</option>
            <option value="49">+49 (Alemania)</option>
            <option value="33">+33 (Francia)</option>
            <option value="44">+44 (Reino Unido)</option>
            <option value="39">+39 (Italia)</option>
            <option value="1C">+1 (Canadá)</option>
            <option value="86">+86 (China)</option>
            <option value="91">+91 (India)</option>
            <option value="81">+81 (Japón)</option>
            <option value="7">+7 (Rusia)</option>
            <option value="234">+234 (Nigeria)</option>
            <option value="27">+27 (Sudáfrica)</option>
            <option value="20">+20 (Egipto)</option>
            <option value="61">+61 (Australia)</option>
            <option value="64">+64 (Nueva Zelanda)</option>
            <option value="90">+90 (Turquía)</option>
            <option value="82">+82 (Corea del Sur)</option>
            <option value="62">+62 (Indonesia)</option>
          </select>
        </label>
      </div>
      <div>
        <label htmlFor="numeroTelefono">
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