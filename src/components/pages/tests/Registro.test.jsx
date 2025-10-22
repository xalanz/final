import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import '@testing-library/jest-dom';
import Registro from "../Registro";

// Mock de la imagen del logo y los estilos
jest.mock('../../components/styles/registro.css', () => ({}));
jest.mock('../img/Level-Up.png', () => 'Level-Up.png');

describe('Registro component', () => {
    it('renderiza el formulario de registro correctamente', () => {
        render(<Registro />);
        
        // Verifica que el logo está presente
        expect(screen.getByAltText('Logo Level-Up Gaming')).toBeInTheDocument();
        
        // Verifica el título del formulario
        expect(screen.getByText('REGISTRO DE USUARIO')).toBeInTheDocument();
        
        // Verifica que todos los campos requeridos están presentes
        expect(screen.getByPlaceholderText('Nombre')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Apellido')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Correo (ejemplo@gmail.com)')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Contraseña')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Confirmar Contraseña')).toBeInTheDocument();
    });

    it('permite ingresar datos en el formulario', () => {
        render(<Registro />);
        
        // Obtiene los campos del formulario
        const nombreInput = screen.getByPlaceholderText('Nombre');
        const apellidoInput = screen.getByPlaceholderText('Apellido');
        const emailInput = screen.getByPlaceholderText('Correo (ejemplo@gmail.com)');
        const passwordInput = screen.getByPlaceholderText('Contraseña');
        
        // Simula la escritura en los campos
        fireEvent.change(nombreInput, { target: { value: 'Juan' } });
        fireEvent.change(apellidoInput, { target: { value: 'Pérez' } });
        fireEvent.change(emailInput, { target: { value: 'juan@gmail.com' } });
        fireEvent.change(passwordInput, { target: { value: '123456' } });
        
        // Verifica que los valores se actualizaron
        expect(nombreInput.value).toBe('Juan');
        expect(apellidoInput.value).toBe('Pérez');
        expect(emailInput.value).toBe('juan@gmail.com');
        expect(passwordInput.value).toBe('123456');
    });

    it('muestra el botón de registrarse', () => {
        render(<Registro />);
        
        // Verifica que el botón de registro está presente
        const registerButton = screen.getByText('Registrarse');
        expect(registerButton).toBeInTheDocument();
        expect(registerButton.tagName).toBe('BUTTON');
        expect(registerButton).toHaveClass('registro-submit-btn');
    });

    it('muestra el botón de ver registros', () => {
        render(<Registro />);
        
        // Verifica que el botón de ver registros está presente
        const viewButton = screen.getByText('Ver Registros');
        expect(viewButton).toBeInTheDocument();
        expect(viewButton).toHaveClass('registro-view-btn');
    });
});