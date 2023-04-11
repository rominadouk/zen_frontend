import "./Home.css"
import Affirmation from "../components/Affirmation";


const Home = () => {
    return ( 
        <>
        <Affirmation />
        <section className="feelings text-center">
            <h3>How are you feeling today, user?</h3>
        </section>
        </>
     );
}
 
export default Home;