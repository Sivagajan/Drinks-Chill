import { Link } from "react-router-dom"

const Home = () => {

    return(
        <>
        <main>
            <section>
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
                </article>
            </section>
        </main>
        </>

    )
}
export default Home