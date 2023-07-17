import { useState } from "react"
import { CartCanvas } from "../CartCanvas"
import styles from "./index.module.css"
import { Badge, Button } from "react-bootstrap"
import useCart from "../../hooks/useCart"


export const Header = () => {

  const [showCart, setShowCart] = useState(false)

  const handleCloseCart = () => setShowCart(false)
  const handleShowCart = () => setShowCart(true)

  const {cart} = useCart();

  return (
    <>
    <header className={` ${styles.header}`}>
    </header>
    <h1 className={`text-shadow text-center ${styles.titulo}`}>18.Drinks</h1>
    <div>
    <Button className={`m-3 ${styles.buttonCart}`} variant='danger' size='lg' onClick={handleShowCart} >
      <i className="fas fa-shopping-cart fa-lg" ></i>
      <Badge pill className="btn btn-sm m-1 text-center" bg="warning">{cart.length}</Badge>
      </Button>
      
    </div>
      <CartCanvas
      showCart={showCart} handleCloseCart={handleCloseCart}
      />
    </>
    
  )
}
