import faker1 from "../../../img/faker1.jpg";
import principal1 from "../../../img/principal1.avif";
import principal3 from "../../../img/principal3.jpeg";
import principal2 from "../../../img/principal2.webp";

export default function ProductListave() {
    return (
        <section className="popular contariner">
            <h2>Lo más vendido</h2>
            <div className="popular-content">
                <img className="highlight" src={faker1} alt="producto" />
                <img className="highlight" src={principal1} alt="producto" />
                <img className="highlight" src={principal3} alt="producto" />
                <img className="highlight" src={principal2} alt="producto" />
            </div>
        </section>
    );
}