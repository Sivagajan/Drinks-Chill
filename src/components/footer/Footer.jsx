import style from './Footer.module.css'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




const Footer = () => {
    return (
        <>
            <div className={style.Footer}>
                <p className={style.pFooter1}>Genuss hat viele Facetten..</p>
                <p className={style.pFooter2}>..aber ohne das richtige Maß geht es nicht!
                    Cocktails kann man mit allen Sinnen genießen. Zum Cocktail-Genuss gehören neben dem Geschmack natürlich auch die Optik, die Farbe und die verschiedenen Aromen, die im Zusammenspiel ganz neue Assoziationen wecken und unterbewusst auch den Geschmack beeinflussen. </p>


                    <FontAwesomeIcon icon="fa-brands fa-twitter" />
                    <FontAwesomeIcon icon="fa-brands fa-font-awesome" />

    <FontAwesomeIcon icon="fa-regular fa-mug-hot" />
    The coffee is ready at these companies!

    Be careful not to spill any your <FontAwesomeIcon icon="fa-thin fa-hat-cowboy" />!
            </div>
            <ul>
                <li>
                    <a href="#">
                        <i class="fab fa-facebook-f icon"></i>    </a>
                </li>
                <li>
                    <a href="#"><i class="fab fa-twitter icon"></i></a>
                </li>
                <li>
                    <a href="#"><i class="fab fa-linkedin-in icon"></i></a></li>
                <li>
                    <a href="#"><i class="fab fa-google-plus-g icon"></i></a></li>
            </ul>



        </>
    )
}
export default Footer