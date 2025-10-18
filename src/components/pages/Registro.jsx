import React, { useState } from 'react';
import '../../components/styles/registro.css';

export default function Registro() {
  const [form, setForm] = useState({
    username: '',
    apellido: '',
    email: '',
    fechaNacimiento: '',
    password: '',
    confirmPassword: '',
  });

  const [messages, setMessages] = useState({});
  const [registroPermitido, setRegistroPermitido] = useState(false);
  const [ageModalOpen, setAgeModalOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));

    // validations on change
    if (name === 'email') {
      if (value === '') {
        clearMessage('email');
      } else if (validarEmail(value)) {
        successMessage('email', '✓ Email válido');
      } else {
        errorMessage('email', 'Solo se permiten correos @gmail.com');
      }
    }

    if (name === 'password') {
      if (value.length === 0) clearMessage('password');
      else if (value.length >= 6) successMessage('password', '✓ Contraseña válida');
      else errorMessage('password', 'Mínimo 6 caracteres');

      // also check confirm password
      if (form.confirmPassword) {
        if (form.confirmPassword === value) successMessage('confirm-password', '✓ Las contraseñas coinciden');
        else errorMessage('confirm-password', 'Las contraseñas no coinciden');
      }
    }

    if (name === 'confirmPassword') {
    if (value === '') clearMessage('confirm-password');
    else if (value === form.password) successMessage('confirm-password', '✓ Las contraseñas coinciden');
    else errorMessage('confirm-password', 'Las contraseñas no coinciden');
    }

    if (name === 'fechaNacimiento') {
    if (value === '') {
        clearMessage('fecha');
        setRegistroPermitido(false);
    } else {
        const edad = calcularEdad(value);
        if (edad >= 18) {
        successMessage('fecha', '✓ Mayor de edad');
        setRegistroPermitido(true);
        } else {
        errorMessage('fecha', 'Debes ser mayor de 18 años o tener permiso de tus padres');
        setAgeModalOpen(true);
        setRegistroPermitido(false);
        }
    }
    }
};

const validarEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@gmail\.com$/;
    return emailRegex.test(email);
};

const calcularEdad = (fechaNacimiento) => {
    const hoy = new Date();
    const nacimiento = new Date(fechaNacimiento);
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mes = hoy.getMonth() - nacimiento.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
    edad--;
    }
    return edad;
};

const errorMessage = (field, msg) => {
    setMessages(prev => ({ ...prev, [field]: { type: 'error', text: msg } }));
};

const successMessage = (field, msg) => {
    setMessages(prev => ({ ...prev, [field]: { type: 'success', text: msg } }));
};

const clearMessage = (field) => {
    setMessages(prev => {
    const copy = { ...prev };
    delete copy[field];
    return copy;
    });
};

const permitirRegistro = () => {
    setRegistroPermitido(true);
    setAgeModalOpen(false);
    successMessage('fecha', '✓ Registro permitido con autorización');
};

const denegarRegistro = () => {
    setRegistroPermitido(false);
    setAgeModalOpen(false);
    setForm(prev => ({ ...prev, fechaNacimiento: '' }));
    errorMessage('fecha', 'Registro cancelado. Necesitas permiso de tus padres.');
};

const handleSubmit = (e) => {
    e.preventDefault();

    if (!validarEmail(form.email)) {
    errorMessage('email', 'Solo se permiten correos @gmail.com');
    return;
    }

    const edad = calcularEdad(form.fechaNacimiento);
    if (edad < 18 && !registroPermitido) {
    errorMessage('fecha', 'Necesitas autorización de tus padres');
    setAgeModalOpen(true);
    return;
    }

    if (form.password !== form.confirmPassword) {
    errorMessage('confirm-password', 'Las contraseñas no coinciden');
    return;
    }

    if (form.password.length < 6) {
    errorMessage('password', 'La contraseña debe tener al menos 6 caracteres');
    return;
    }

    // All good
    alert('¡Registro exitoso! Bienvenido a Level Up');
    setForm({ username: '', apellido: '', email: '', fechaNacimiento: '', password: '', confirmPassword: '' });
    setMessages({});
    setRegistroPermitido(false);
};

return (
    <div className="registro-container">
    <div className="logo-container">
        <img src="https://via.placeholder.com/150/4cca36/ffffff?text=LEVEL+UP" alt="Logo" className="logo-img" />
    </div>

    <form id="registroForm" onSubmit={handleSubmit} className="registro-form">
        <h2 className="form-title">REGISTRO DE USUARIO</h2>

        <div className="input-container">
        <i className="fa-solid fa-user" />
        <input
            type="text"
            id="username"
            name="username"
            required
            className="input"
            placeholder="Nombre"
            value={form.username}
            onChange={handleChange}
        />
        {messages['username'] && (
            <div className={messages['username'].type === 'error' ? 'error-message' : 'success-message'}>
            {messages['username'].text}
            </div>
        )}
        </div>

        <div className="input-container">
        <i className="fa-solid fa-user" />
        <input
            type="text"
            id="apellido"
            name="apellido"
            required
            className="input"
            placeholder="Apellido"
            value={form.apellido}
            onChange={handleChange}
        />
        {messages['apellido'] && (
            <div className={messages['apellido'].type === 'error' ? 'error-message' : 'success-message'}>
            {messages['apellido'].text}
            </div>
        )}
        </div>

        <div className="input-container">
        <i className="fa-solid fa-envelope" />
        <input
            type="email"
            id="email"
            name="email"
            required
            className="input"
            placeholder="Correo (ejemplo@gmail.com)"
            value={form.email}
            onChange={handleChange}
        />
        {messages['email'] && (
            <div className={messages['email'].type === 'error' ? 'error-message' : 'success-message'}>
            {messages['email'].text}
            </div>
        )}
        </div>

        <div className="input-container">
        <i className="fa-solid fa-calendar" />
        <input
            type="date"
            id="fechaNacimiento"
            name="fechaNacimiento"
            required
            className="input"
            value={form.fechaNacimiento}
            onChange={handleChange}
        />
        {messages['fecha'] && (
            <div className={messages['fecha'].type === 'error' ? 'error-message' : 'success-message'}>
            {messages['fecha'].text}
            </div>
        )}
        </div>

        <div className="input-container">
        <i className="fa-solid fa-lock" />
        <input
            type="password"
            id="password"
            name="password"
            required
            className="input"
            placeholder="Contraseña"
            value={form.password}
            onChange={handleChange}
        />
        {messages['password'] && (
            <div className={messages['password'].type === 'error' ? 'error-message' : 'success-message'}>
            {messages['password'].text}
            </div>
        )}
        </div>

        <div className="input-container">
        <i className="fa-solid fa-lock" />
        <input
            type="password"
            id="confirm-password"
            name="confirmPassword"
            required
            className="input"
            placeholder="Confirmar Contraseña"
            value={form.confirmPassword}
            onChange={handleChange}
        />
        {messages['confirm-password'] && (
            <div className={messages['confirm-password'].type === 'error' ? 'error-message' : 'success-message'}>
            {messages['confirm-password'].text}
            </div>
        )}
        </div>

        <button type="submit" className="submit-btn">Registrarse</button>
    </form>

      {/* Age modal */}
    {ageModalOpen && (
        <div className="modal" id="ageModal" style={{ display: 'block' }}>
        <div className="modal-content">
            <h3>Verificación de Edad</h3>
            <p>Detectamos que eres menor de edad. ¿Tienes permiso de tus padres para registrarte?</p>
            <button className="btn-yes" onClick={permitirRegistro}>Sí, tengo permiso</button>
            <button className="btn-no" onClick={denegarRegistro}>No, cancelar</button>
        </div>
        </div>
    )}
    </div>
);
}