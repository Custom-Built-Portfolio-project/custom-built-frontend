import React, { useState } from 'react';

interface Form {
    username: string;
    phone: number;
    email: string;
    message: string;
  }

const Contacto: React.FC = () => {

    const [formData, setFormData] = useState<Form>({
        username: '',
        phone: 0,
        email: '',
        message: '',
      });

      const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Aquí puedes manejar la lógica para enviar el formulario, por ejemplo, enviar los datos a un servidor o mostrar un mensaje de éxito.
        console.log(formData);
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
                    required
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
                    required
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
                    required
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
                    required
                />
                </label>
            </div>

        <button type="submit">Enviar</button>
    </form>
    
    );
}

export default Contacto;