import { useState } from "react"
import { CartCanvas } from "../CartCanvas"
import styles from "./index.module.css"
import { Button } from "react-bootstrap"


export const Header = () => {

  const [showCart, setShowCart] = useState(false)

  const handleCloseCart = () => setShowCart(false)
  const handleShowCart = () => setShowCart(true)

  return (
    <header className={`d-flex justify-content-around py-5 ${styles.header}`}>
      <h1>Search Drinks</h1>
      <Button variant='outline-light' size='lg' onClick={handleShowCart} >
      <i className="fas fa-shopping-cart fa-lg" ></i>
      </Button>
      <CartCanvas
      showCart={showCart} handleCloseCart={handleCloseCart}
      />
    </header>
  )
}
