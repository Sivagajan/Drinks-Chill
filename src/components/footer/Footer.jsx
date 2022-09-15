import style from './Footer.module.css'
import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
/* import { fab } from '@fortawesome/free-brands-svg-icons' */
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add( faCheckSquare, faCoffee)




const Footer = () => {
    return (
        <>
            <div className={style.Footer}>
                <p className={style.pFooter1}>Genuss hat viele Facetten..</p>
                <p className={style.pFooter2}>..aber ohne das richtige Maß geht es nicht!
                    Cocktails kann man mit allen Sinnen genießen. Zum Cocktail-Genuss gehören neben dem Geschmack natürlich auch die Optik, die Farbe und die verschiedenen Aromen, die im Zusammenspiel ganz neue Assoziationen wecken und unterbewusst auch den Geschmack beeinflussen. </p>


            </div>
             <ul>
                <li>
                    <a href="#">
                        <i className="fab fa-facebook-f icon"></i>    </a>
                </li>
                <li>
                    <a href="#"><i className="fab fa-twitter icon"></i></a>
                </li>
                <li>
                    <a href="#"><i className="fab fa-linkedin-in icon"></i></a></li>
                <li>
                    <a href="#"><i className="fab fa-google-plus-g icon"></i></a></li>
            </ul>



        </>
    )
}
export default Footer