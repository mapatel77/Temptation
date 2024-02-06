import Heading from "../sections/headingpages/Heading";
import Specials from "../sections/headingpages/Specials"
import Testimonials from "../sections/headingpages/Testimonials"
import About from "../sections/headingpages/About"

function Homepage(){

    return(

            <>
            <Heading/>
            <main>
                <Specials />
                <Testimonials />
                <About />
            </main>
            </>
    )
}

export default Homepage;