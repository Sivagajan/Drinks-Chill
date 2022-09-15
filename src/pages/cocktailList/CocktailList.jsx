import { useEffect, useState } from "react"
import Cocktail from '../../components/cocktail/Cocktail'
import style from './CocktailList.module.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import { useParams } from "react-router-dom"

const Cocktails = (props) => {

    const [cocktails, setCocktails] = useState(null)
    const params = useParams()

    let url = ''
    console.log(params.drink)

    switch (params.drink) {
        case 'random':
            url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php'
            break
        case 'non-Alcoholic':
            url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic'
            break
        case 'gin':
            url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin'
            break
        case 'scotch':
            url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Scotch'
            break
        case 'vodka':
            url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka'
            break
        case 'rum':
            url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Rum'
            break
        default:
            url= `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${params.drink}`
    }


    console.log(url)


    useEffect(() => {

        console.log('fetchen tut er')
        /* fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${props.sorte}`) */

        fetch(url)
            .then(res => res.json())
            .then(data => setCocktails(data.drinks))

        console.log(cocktails)
        console.log('fetchen tut er hier auch')
    }, [url])

    return (
        <>

            < Header />


            <div className={style.divCocktailList}>

            {cocktails &&
            
                cocktails.map((item, e) => {

                    return (
                        <>
                        
                        <div className={`style${Math.floor((e % 6) + 1)} ${e % 2 === 0 ? 'left' : 'right'}`}>
                            {/* {console.log(item.strDrink)} */}
                            
                            <Cocktail trigger={true} key={e} id={item.idDrink} cocktail_Img={item.strDrinkThumb} cocktailName={item.strDrink} />
                        </div>
                        </>
                        )
                    })

            }

            </div>

            < Footer />
        </>

    )
}

export default Cocktails