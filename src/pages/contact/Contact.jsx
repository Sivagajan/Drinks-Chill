import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import styles from './Contact.module.css'
import { useState } from 'react';
import ChrisWeint from '../../components/chrisWeint/ChrisWeint';

const Contact = () => {

    const [popupBtn1, setpopupBtn1] = useState(false)
    const place = 'noSearch'



    return (
        <>
            < Header place={place} />
            <div className={styles.contactBackground}>
                <h3 className={styles.h3Contact}>Contact</h3>
                <p className={styles.pContact}>Du hast Bugs auf unserer schönen Webiste entdeckt? Dann maile doch entweder an christian.peters@supercode.de oder benutze das Kontaktformular um uns wissen zu lassen wie wir unseren React Guru Christian noch mehr Verzweifelung fühlen lassen können.</p>


                <div className={styles.formContact}>
                    <label className={styles.ContactLabel} htmlFor="">Ihr Name</label>
                    <input className={styles.contactInput} type="text" />
                    <label className={styles.ContactLabel} htmlFor="">Email Adresse</label>
                    <input className={styles.contactInput} type="email" name="" id="" />
                    <label className={styles.ContactLabel} htmlFor="">Ihre Nachricht</label>
                    <textarea className={styles.contactTextArea} />
                    <ChrisWeint trigger={popupBtn1} setTrigger={setpopupBtn1}></ChrisWeint>
                    <button onClick={() => setpopupBtn1(true)} className={styles.btnContact}>Submit</button>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Contact

