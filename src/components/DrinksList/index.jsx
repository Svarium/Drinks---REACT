import React from 'react'
import { Row } from 'react-bootstrap'
import { DrinkCard } from '../DrinkCard'
import useDrinks from '../../hooks/useDrinks'

export const DrinksList = () => {


  const {drinks} = useDrinks()

  return (
   <Row >
    {
        drinks.map(drink => (
            <DrinkCard  key={drink.idDrink} drink={drink}/>
        ))
    }
   </Row>
  )
}
