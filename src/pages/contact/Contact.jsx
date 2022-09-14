import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import './Contact.css'
import { useState } from 'react';
import ChrisWeint from '../../components/chrisWeint/ChrisWeint';

const Contact = () => {

    const [popupBtn1, setpopupBtn1] = useState(false)
    const place = 'noSearch'
    return (
        <>
        < Header place={place} />
            <div className="contactBackground">
                <h3 className="h3Contact">Contact</h3>
                <p className="pContact">Du hast Bugs auf unserer schönen Webiste entdeckt? Dann maile doch entweder an christian.peters@supercode.de oder benutze das Kontaktformular um uns wissen zu lassen wie wir unseren    Coding Guru Christian noch mehr Verzweifelung fühlen lassen können.</p>


                <form className='formContact' action="">
                    <label className='ContactLabel' htmlFor="">Ihr Name</label>
                    <input className='contactInput1' type="text" />
                    <label className='ContactLabel' htmlFor="">Email Adresse</label>
                    <input className='contactInput2' type="email" name="" id="" />
                    <label className='ContactLabel' htmlFor="">Ihre Nachricht</label>
                    <input className='contactInput3' type="text" />
                    <ChrisWeint trigger={popupBtn1} setTrigger={setpopupBtn1}></ChrisWeint>
                    <button onClick={() => setpopupBtn1(true)} className='btnContact'>Submit</button>
                </form>
            </div>
            <Footer />
        </>
    )
}

export default Contact

