import style from './AddCocktails.module.css'
import img1 from '../../img/image1.png'
import img2 from '../../img/image2.png'
import img3 from '../../img/image3.png'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'

const AddCocktails = () => {
    const place = 'noSearch'

    return (
        <>
            <Header place={place} />

            <div className={style.backgroundAdd}>
                
                <h3 className={style.h3Add}>
                    Füge deine eigenen Getränke hinzu!
                </h3>

                <div className={style.addFlex}>
                    <div className={style.inputList}>
                        <input placeholder='Name' type="text" />
                        <input placeholder='Kategorie' type="text" />
                        <input placeholder='Bild URL' type="text" />
                        <input placeholder='Anleitung' className={style.fourthInput} type="text" />
                        <input placeholder='Zutat 1' type="text" />
                        <input placeholder='Menge Zutat 1' type="text" />
                        <input placeholder='Zutat 2' type="text" />
                        <input placeholder='Menge Zutat 2' type="text" />
                        <input placeholder='Zutat 3' type="text" />
                        <input placeholder='Menge Zutat 3' type="text" />
                        <button>Submit</button>
                    </div>

                    <section className={style.imgRight}>
                        <div className={style.imgContainerCocktails}>
                            <div className={style.imgCocktails1}>
                                <img src={img1} alt="" />
                            </div>
                            <div className={style.imgCocktails2}>
                                <img src={img2} alt="" />
                            </div>
                        </div>
                        {<div className={style.imgCocktails3}>
                            <img src={img3} alt="" />
                        </div>}
                    </section>
                </div>
            </div>
            <Footer />
        </>
    )


}

export default AddCocktails