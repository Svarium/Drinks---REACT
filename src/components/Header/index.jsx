import { useState } from "react"
import { CartCanvas } from "../CartCanvas"
import styles from "./index.module.css"
import { Button } from "react-bootstrap"


export const Header = () => {

  const [showCart, setShowCart] = useState(false)

  const handleCloseCart = () => setShowCart(false)
  const handleShowCart = () => setShowCart(true)

  return (
    <>
    <header className={` ${styles.header}`}>
    </header>
    <h1 className={`text-shadow text-center ${styles.titulo}`}>18.Drinks</h1>
    <Button className={`m-3 ${styles.buttonCart}`} variant='danger' size='lg' onClick={handleShowCart} >
      <i className="fas fa-shopping-cart fa-lg" ></i>
      </Button>
    <CartCanvas
      showCart={showCart} handleCloseCart={handleCloseCart}
      />
    </>
    
  )
}
