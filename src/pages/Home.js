import "./Home.css"
import Affirmation from "../components/Affirmation";


const Home = () => {
    return ( 
        <>
        <Affirmation />
        <section className="feelings text-center">
            <h3>How are you feeling today, user?</h3>
            <button>Happy</button>
            <button>Sad</button>
            <button>Angry</button>
            <button>Scared</button>
            <button>Surprised</button>
            <button>Disgusted</button>
        </section>
        </>
     );
}
 
export default Home;