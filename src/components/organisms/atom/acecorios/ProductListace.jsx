import descarga from "../../../img/descarga.jpeg";
import mouse from "../../../img/D_NQ_NP_870173-MLC89655377370_082025-O-mouse-gamer-ergonomico-rgb-6000-dpi-led-cable-18-m.webp";
import teclado from "../../../img/teclado-mecanico-gaming-biwond-m4-pro.jpg";
import auriculares from "../../../img/D_NQ_NP_888989-MLM73946955330_012024-O-auriculares-para-juegos-usb-35mm-con-microfono-iluminados.webp";

export default function ProductListace() {
    return (
        <section className="popular contariner">
            <h2>Lo más vendido</h2>
            <div className="popular-content">
                <img className="highlight" src={descarga} alt="producto" />
                <img className="highlight" src={mouse} alt="producto" />
                <img className="highlight" src={teclado} alt="producto" />
                <img className="highlight" src={auriculares} alt="producto" />
            </div>
        </section>
    );
}