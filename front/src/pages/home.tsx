import Cars from "../components/cars";

export default function Home() {
    return (
        <>
            <section className="hero">
                <div className="text container">
                    <h1 className="hero-title">Fast And Easy</h1>
                    <h1 className="hero-title"> Way To Rent</h1>
                    <h1 className="hero-title">A Branded Car</h1>
                </div>
            </section>
            <section className="container">
                <h1 className="section-title">Our cars</h1>
                <Cars />
            </section>
        </>
    )
}