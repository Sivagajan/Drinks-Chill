import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import './Contact.css'
import chris from '../../img/chris.png'

const Contact = () => {
    return (
        <>
            < Header />
            <div className="contactBackground">
                <h3 className="h3Contact">Contact</h3>
                <p className="pContact">Du hast Bugs auf unserer schönen Webiste entdeckt? Dann maile doch entweder an christian.peters@supercode.de oder benutze das Kontaktformular um uns wissen zu lassen wie wir unseren Coding Guru Christian noch mehr zum weinen bringen können.</p>
                <img src={chris} alt="" />

                <form className='formContact' action="">
                    <label className='ContactLabel1' htmlFor="">Ihr Name</label>
                    <input className='contactInput1' type="text" />
                    <label className='ContactLabel2' htmlFor="">Email Adresse</label>
                    <input className='contactInput2' type="email" name="" id="" />
                    <label className='ContactLabel3' htmlFor="">Ihre Nachricht</label>
                    <input className='contactInput3' type="text" />
                    <button className='btnContact'>Submit</button>
                </form>
            </div>
            <Footer />
        </>
    )
}

export default Contact