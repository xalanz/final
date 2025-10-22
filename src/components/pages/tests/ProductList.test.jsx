import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import '@testing-library/jest-dom';
import ProductList from "../../organisms/atom/ProductList";
import { CartContext } from "../../../context/CartContext";

// Mock del CartContext
const mockAddToCart = jest.fn();
const mockCartContext = {
    cart: [],
    addToCart: mockAddToCart,
    removeFromCart: jest.fn(),
    updateQuantity: jest.fn()
};

// Wrapper personalizado para proveer el contexto mockeado
const CustomWrapper = ({ children }) => (
    <CartContext.Provider value={mockCartContext}>
        {children}
    </CartContext.Provider>
);

// Mock de las imágenes
jest.mock("../../organisms/img/principal1.avif", () => "principal1.avif");
jest.mock("../../organisms/img/K65_RGB_MINI_01.avif", () => "teclado.avif");
jest.mock("../../organisms/img/portaadu.avif", () => "portaadu.avif");
jest.mock("../../organisms/img/Gabinetes-de-computadora-ATX-OEM-Cool-y-Handsome-para-gamers-con-vidrio-templado-ventiladores-de-colores-y-refrigeraci-n-por-agua.avif", () => "gabinete.avif");

beforeEach(() => {
    Storage.prototype.getItem = jest.fn(() => "[]");
    Storage.prototype.setItem = jest.fn();
});

describe('ProductList component', () => {
    const mockProducts = [
        { id: 1, name: "Gabinete WHITE", price: "$60.000", img: "gabinete.avif" },
        { id: 2, name: "Gabinete gamer BLACK", price: "$40.000", img: "gabinete.avif" },
        { id: 3, name: "Mouse ergonomic", price: "$30.000", img: "gabinete.avif" },
        { id: 4, name: "Mouse REDRAGON", price: "$30.000", img: "gabinete.avif" }
    ];

    it('renderiza correctamente la lista de productos', () => {
        render(
            <CustomWrapper>
                <ProductList products={mockProducts} />
            </CustomWrapper>
        );
        
        // Verifica el título
        expect(screen.getByText("Todos los productos")).toBeInTheDocument();
        
        // Verifica que algunos productos estén presentes
        expect(screen.getByText("Gabinete WHITE")).toBeInTheDocument();
        expect(screen.getByText("$60.000")).toBeInTheDocument();
        expect(screen.getByText("Gabinete gamer BLACK")).toBeInTheDocument();
        expect(screen.getByText("$40.000")).toBeInTheDocument();
    });

    it('muestra botones de "Agregar al carrito" para cada producto', () => {
        render(
            <CustomWrapper>
                <ProductList products={mockProducts} />
            </CustomWrapper>
        );
        
        const buttons = screen.getAllByText('Agregar al carrito');
        expect(buttons.length).toBeGreaterThan(0);
    });

    it('permite agregar productos al carrito', () => {
        render(
            <CustomWrapper>
                <ProductList products={mockProducts} />
            </CustomWrapper>
        );
        
        // Encuentra el botón del primer producto y lo clickea
        const buttons = screen.getAllByText('Agregar al carrito');
        fireEvent.click(buttons[0]);
        
        // Verifica que se llamó a la función addToCart del contexto
        expect(mockAddToCart).toHaveBeenCalledWith(expect.objectContaining({
            id: 1,
            name: "Gabinete WHITE",
            price: "$60.000",
            img: "gabinete.avif"
        }));
    });

    it('muestra las imágenes de los productos', () => {
        render(
            <CustomWrapper>
                <ProductList products={mockProducts} />
            </CustomWrapper>
        );
        
        // Verifica que las imágenes estén presentes usando sus alt text
        expect(screen.getByAltText("Gabinete WHITE")).toBeInTheDocument();
        expect(screen.getByAltText("Gabinete gamer BLACK")).toBeInTheDocument();
    });
});