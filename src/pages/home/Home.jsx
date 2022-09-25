import { Link } from "react-router-dom"
import style from'./Home.module.css'
import {motion} from 'framer-motion'
import React from 'react'

const Home = () => {

    return (
        <>
            <main>
                <section className={style.sectionHome}>

                    <motion.article  whileHover={{scale:1.2}} onHoverStart={e=>{}} onHoverEnd={e=>{}} className="style1 left">
                        <Link to='cocktailList/gin'>
                            <h2>Gin</h2>
                            <p>Let the evening BeGin</p>
                        </Link>
                    </motion.article>

                    <motion.article  whileHover={{scale:1.2}} onHoverStart={e=>{}} onHoverEnd={e=>{}} className="style2 right">
                        <Link to='/cocktailList/vodka'>
                            <h2>Vodka</h2>
                            <p>if life gives you Lemons, add Vodka</p>
                        </Link>
                    </motion.article>
                    <motion.article whileHover={{scale:1.2}} onHoverStart={e=>{}} onHoverEnd={e=>{}} className="style3 left">
                        <Link to='/cocktailList/rum'>
                            <h2>Rum</h2>
                            <p>Rum Forrest Rum</p>
                        </Link>
                    </motion.article>
                    <motion.article whileHover={{scale:1.2}} onHoverStart={e=>{}} onHoverEnd={e=>{}} className="style4 right">
                        <Link to='/cocktailList/scotch'>
                            <h2>Scotch</h2>
                            <p>Scotch is like liquid sunshine</p>
                        </Link>
                    </motion.article>
                    <motion.article whileHover={{scale:1.2}} onHoverStart={e=>{}} onHoverEnd={e=>{}} className="style5 left">
                        <Link to='/cocktailList/non-Alcoholic'>
                            <h2>Non-Alocohlic</h2>
                            <p>Time for a break</p>
                        </Link>
                    </motion.article>
                    <motion.article whileHover={{scale:1.2}} onHoverStart={e=>{}} onHoverEnd={e=>{}} className="style6 right">
                        <Link to='/cocktailList/random'>
                            <h2>Random</h2>
                            <p>the strugle is Real</p>
                        </Link>
                    </motion.article>
                </section>
            </main>
        </>

    )
}
export default Home