import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import '@testing-library/jest-dom';
import ProductListAcee from "../../organisms/atom/acecorios/ProductListAcee";
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
jest.mock("../../../img/sillavalo.jpg", () => "sillavalo.jpg");
jest.mock("../../../img/alfombra.jpg", () => "alfombra.jpg");
jest.mock("../../../img/mouspad.webp", () => "mouspad.webp");
jest.mock("../../../img/portaaudifono.jpeg", () => "portaaudifono.jpeg");
jest.mock("../../../img/escritorio.jpg", () => "escritorio.jpg");
jest.mock("../../../img/sillarosada.png", () => "sillarosada.png");
jest.mock("../../../img/luzled.jpg", () => "luzled.jpg");
jest.mock("../../../img/mouspadrojo.jpg", () => "mouspadrojo.jpg");
jest.mock("../../../img/cojin.jpg", () => "cojin.jpg");
jest.mock("../../../img/cojin2.jpg", () => "cojin2.jpg");
jest.mock("../../../img/sillalol.webp", () => "sillalol.webp");
jest.mock("../../../img/focodeluz.webp", () => "focodeluz.webp");

beforeEach(() => {
    Storage.prototype.getItem = jest.fn(() => "[]");
    Storage.prototype.setItem = jest.fn();
});

describe('ProductListAcee component', () => {
    const mockProducts = [
        { id: 1, name: "Silla Gamer VALORANT REYNA", price: "$150.000", img: "sillavalo.jpg" },
        { id: 2, name: "Alfombra gamer", price: "$10.000", img: "alfombra.jpg" },
        { id: 3, name: "Mouspad", price: "$7.000", img: "mouspad.webp" },
        { id: 4, name: "Porta audifonos", price: "$12.990", img: "portaaudifono.jpeg" }
    ];

    it('renderiza correctamente la lista de productos', () => {
        render(
            <CustomWrapper>
                <ProductListAcee />
            </CustomWrapper>
        );
        
        // Verifica el título
        expect(screen.getByText("Todos los productos")).toBeInTheDocument();
        
        // Verifica que algunos productos estén presentes
        expect(screen.getByText("Silla Gamer VALORANT REYNA")).toBeInTheDocument();
        expect(screen.getByText("Alfombra gamer")).toBeInTheDocument();
        // Verifica los precios como elementos independientes
        const prices = screen.getAllByText(/\$[\d.,]+/);
        expect(prices.length).toBeGreaterThan(0);
    });

    it('muestra botones de "Agregar al carrito" para cada producto', () => {
        render(
            <CustomWrapper>
                <ProductListAcee />
            </CustomWrapper>
        );
        
        const buttons = screen.getAllByText('Agregar al carrito');
        expect(buttons.length).toBe(12); // Ya que hay 12 productos en total
    });

    it('permite agregar productos al carrito', () => {
        render(
            <CustomWrapper>
                <ProductListAcee />
            </CustomWrapper>
        );
        
        // Encuentra el botón del primer producto y lo clickea
        const buttons = screen.getAllByText('Agregar al carrito');
        fireEvent.click(buttons[0]);
        
        // Verifica que se llamó a la función addToCart del contexto
        expect(mockAddToCart).toHaveBeenCalledWith(expect.objectContaining({
            id: 1,
            name: "Silla Gamer VALORANT REYNA",
            img: expect.any(String) // Usamos any(String) porque la imagen es un módulo importado
        }));
        
        // Verificamos que el precio fue pasado pero no su valor exacto
        expect(mockAddToCart.mock.calls[0][0]).toHaveProperty('price');
    });

    it('muestra las imágenes de los productos', () => {
        render(
            <CustomWrapper>
                <ProductListAcee />
            </CustomWrapper>
        );
        
        // Verifica que las imágenes estén presentes usando sus alt text
        expect(screen.getByAltText("Silla Gamer VALORANT REYNA")).toBeInTheDocument();
        expect(screen.getByAltText("Alfombra gamer")).toBeInTheDocument();
    });
});