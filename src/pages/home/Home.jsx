import { Link } from "react-router-dom"
import style from './Home.module.css'

const Home = () => {

    return (
        <>
            <main>
<<<<<<< HEAD
                <section className="homeGrid">
                    <article className="style1 left">
                        <a>
                            <h2>Gin</h2>
                            <p>Let the evening BeGin</p>
                        </a>
                    </article>
                    <article className="style2 right">
                        <h2>Vodka</h2>
                        <p>if life gives you Lemons, add Vodka</p>
                    </article>
                    <article className="style3 left">
                        <h2>Rum</h2>
                        <p>Rum Forrest Rum</p>
                    </article>
                    <article className="style4 right">
                        <h2>Scotch</h2>
                        <p>Scotch is like liquid sunshine</p>
                    </article>
                    <article className="style5 left">
                        <h2>Non-Alocohlic</h2>
                        <p>Time for a break</p>
                    </article>
                    <article className="style6 right">
                        <h2>Random</h2>
                        <p>the strugle is Real</p>
=======
                <section>
                    <article className="style1 left">
                        <Link to='cocktailList/gin'>
                            <h2>Gin</h2>
                            <p>Let the evening BeGin</p>
                        </Link>
                    </article>
                    <article className="style2 right">
                        <Link to='/cocktailList/vodka'>
                            <h2>Vodka</h2>
                            <p>if life gives you Lemons, add Vodka</p>
                        </Link>
                    </article>
                    <article className="style3 left">
                        <Link to='/cocktailList/rum'>
                            <h2>Rum</h2>
                            <p>Rum Forrest Rum</p>
                        </Link>
                    </article>
                    <article className="style4 right">
                        <Link to='/cocktailList/scotch'>
                            <h2>Scotch</h2>
                            <p>Scotch is like liquid sunshine</p>
                        </Link>
                    </article>
                    <article className="style5 left">
                        <Link to='/cocktailList/non-Alcoholic'>
                            <h2>Non-Alocohlic</h2>
                            <p>Time for a break</p>
                        </Link>
                    </article>
                    <article className="style6 right">
                        <Link to='/cocktailList/random'>
                            <h2>Random</h2>
                            <p>the strugle is Real</p>
                        </Link>
>>>>>>> main
                    </article>
                </section>
            </main>
        </>

    )
}
export default Home