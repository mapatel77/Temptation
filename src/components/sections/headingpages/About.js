export default function About() {
    return (
        <article className="about-us">
            <section className="hero-text">
                <h1>Little Lemon</h1>
                <h2>Auckland</h2>
                <p className="about-subtext">Little Lemon opened in 2004 by two Indian brothers, Harry and Jass . 
                Despite the city's diversity, the two brothers recognized the lack of Indian cuisine in Auckland, 
                and were inspired to bring the flavors of their hometown in India to the people of Auckland. The two brothers 
                continue to oversee the Little Lemon restaurant, nearly twenty years later.</p>
            </section>

            <section className="double-image">
                <img className="about-1" src={require('../../../assets/food3.jpeg')} alt="Little Lemon restaurant cuisine 1"></img>
                <img className="about-2" src={require('../../../assets/food2.jpeg')} alt="Little Lemon restaurant cuisine 2"></img>
            </section>
    </article>
    );
}