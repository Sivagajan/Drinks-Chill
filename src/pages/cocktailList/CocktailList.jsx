import { useEffect, useState } from "react"
import Cocktail from '../../components/cocktail/Cocktail'

const Cocktails = (props) => {

    const [cocktails, setCocktails] = useState([])

    useEffect(() => {

        console.log('fetchen tut er')

        /* fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${props.sorte}`) */

        fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin')
            .then(res => res.json())
            .then(data => setCocktails(data.drinks))
        console.log(cocktails)
        console.log('fetchen tut er hier auch')
    }, [])

    return (

        <>
            {cocktails.map((item, e) => {

                return (
                    <Cocktail key={e} cocktail_Img={item.strDrinkThumb} cocktail_Name={item.strDrink} />

                )
            })}


        </>

    )
}

export default Cocktails