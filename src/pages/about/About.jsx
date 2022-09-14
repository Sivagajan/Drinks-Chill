import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import './About.css'
import siva from '../../img/siva.png'
import hussein from '../../img/hussein.png'
import stanni from '../../img/stanni.png'
const About = () => {

    const place = 'noSearch'
    return (
        <>
        < Header place={place} />
            <div className="aboutBackground">
                <div>
                    <h3 className="aboutUs">About</h3>
                    <p className="pAbout pSize">Vor langer Zeit lebten die drei Programmiersprachen HTML/CSS/JS in Harmonie zusammen. Dann änderte sich alles, als React.js angriff. Nur diese drei Nerds, die alle wichtigen Programmiersprachen beherrschen, konnten es aufhalten.</p>
                </div>
                <div className="flexAbout">
                    <div className="aboutCard1">
                        <img className='aboutImg' src={siva} alt="" />
                        <p className="pAbout">Siva 'the Api God'</p>
                    </div>
                    <div className="aboutCard1">
                        <img className='aboutImg' src={hussein} alt="" />
                        <p className="pAbout">Hussein 'the CSS Angel'</p>
                    </div>
                    <div className="aboutCard1">
                        <img className='aboutImg' src={stanni} alt="" />
                        <p className="pAbout">Stanni 'the Psychotherapist'</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default About