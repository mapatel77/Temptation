import {Link} from 'react-router-dom';

function Heading(){

    return(
        <header>
            <article className="call-to-action">
                <section className="hero-text">
                    <h1>Little Lemon</h1>
                    <h2>Auckland</h2>
                    <p className="subsection">
                    We are a family owned Indian Restaurant, located on  Queen Street in Auckland. We focus
                    on traditional recipes served with a modern twist.
                    </p>
                    <br/>
                    <Link className='action-button' to='/reservations'>Reservations</Link>
                </section>
                <section className="hero-image">
                    <img src={require('../../../assets/food1.png')} alt="Little Lemon restaurant cuisine"></img>
                </section>
            </article>
        </header>

    )
}

export default Heading;
