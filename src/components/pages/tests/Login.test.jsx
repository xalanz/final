import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import '@testing-library/jest-dom';
import Login from "../Login";
import '../styles/inicio.css';

// Mock de useNavigate
const mockNavigate = jest.fn();

// Mock de los estilos y la imagen siever para la que imagens estas validadas 
jest.mock('../styles/inicio.css', () => ({}));
jest.mock('../img/Level-Up.png', () => 'Level-Up.png');

// Mock react-router-dom antes de los tests
jest.mock('react-router-dom', () => ({
    __esModule: true,
    Link: ({ children, to }) => <a href={to}>{children}</a>,
    useNavigate: () => mockNavigate
}));

describe('Login component', () => {
    beforeEach(() => {
        // Limpiamos los mocks antes de cada prueba
        jest.clearAllMocks();
    });

    it('renderiza correctamente el formulario de login', () => {
        render(<Login />);
        
        // Verifica que el logo está presente
        expect(screen.getByAltText('Logo Level-Up Gaming')).toBeInTheDocument();
        
        // Verifica que los campos del formulario están presentes
        expect(screen.getByPlaceholderText('Correo')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Contraseña')).toBeInTheDocument();
        
        // Verifica que el botón de iniciar está presente
        expect(screen.getByText('Iniciar')).toBeInTheDocument();
        
        // Verifica el texto de registro
        expect(screen.getByText('¿No te has registrado?')).toBeInTheDocument();
        expect(screen.getByText('Regístrate aquí')).toBeInTheDocument();
    });

    it('muestra los campos de entrada requeridos', () => {
        render(<Login />);
        
        // Verifica que los campos son requeridos
        const emailInput = screen.getByPlaceholderText('Correo');
        const passwordInput = screen.getByPlaceholderText('Contraseña');
        
        expect(emailInput).toHaveAttribute('required');
        expect(passwordInput).toHaveAttribute('required');
    });

    it('contiene los enlaces correctos', () => {
        render(<Login />);
        
        // Verifica el enlace de registro
        const registroLink = screen.getByText('Regístrate aquí');
        expect(registroLink.closest('a')).toHaveAttribute('href', '/registro');
        
        // Verifica el enlace del botón iniciar
        const iniciarButton = screen.getByText('Iniciar');
        expect(iniciarButton.closest('a')).toHaveAttribute('href', '/');
    });
});