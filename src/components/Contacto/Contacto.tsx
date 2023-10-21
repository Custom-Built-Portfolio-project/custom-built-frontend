import React, { useState } from 'react';
import './Contacto.css'
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
    if (name === 'username') {
       // Eliminar espacios extra entre palabras y al principio y al final
    const normalizedValue = value.trim().replace(/\s+/g, ' ');
  
      // Validar el nombre después de eliminar espacios extras
      error = validateName(normalizedValue);
  
      // Actualizar el estado con el valor normalizado y manejar el error
      setFormData(prevState => ({
        ...prevState,
        [name]: normalizedValue,
      }));
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: error || '', // Si error es undefined, establece una cadena vacía
      }));
    } 
    else if (name === 'phoneCode') {
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
    <div className="container">
  <h2>Contactanos</h2>
  <form onSubmit={handleSubmit}>
    <div className="form-row">
      <div className="column">
        <label htmlFor="username">Nombre:</label>
        <input type="text" id="username" name="username" value={formData.username} onChange={handleInputChange} />
      </div>
      <div className="column">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} />
      </div>
    </div>
    <div className="form-row">
      <div className="column">
        <label htmlFor="phoneCode">Código de Área:</label>
        <select id="phoneCode" name="phoneCode" value={formData.phoneCode} onChange={handleInputChange}>
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
      </div>
      <div className="column">
        <label htmlFor="phone">Teléfono:</label>
        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} />
      </div>
    </div>
    <div className="form-row">
      <div className="column">
        <label htmlFor="message">Mensaje:</label>
        <textarea id="message" name="message" value={formData.message} onChange={handleInputChange}></textarea>
      </div>
    </div>
    {Object.keys(errors).map((key, index) => {
      if (errors[key]) {
        return <p key={index}>{errors[key]}</p>;
      }
      return null;
    })}
    <button type="submit">Enviar</button>
  </form>
</div>

  );
}

export default Contacto;