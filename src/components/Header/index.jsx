import { useState } from "react"
import { CartCanvas } from "../CartCanvas"
import styles from "./index.module.css"
import { Badge, Button } from "react-bootstrap"
import useCart from "../../hooks/useCart"
import { Link } from "react-router-dom"
import useAuth from "../../hooks/useAuth"
import Swal from "sweetalert2"



export const Header = () => {

  const [showCart, setShowCart] = useState(false)

  const handleCloseCart = () => setShowCart(false)
  const handleShowCart = () => setShowCart(true)
 
  const {cart} = useCart();

  const {user, logout} = useAuth();

  const handleLogout = () => {
    logout()
    Swal.fire('¡Esperamos que vuelvas pronto!')
  }

  return (
    <>
    <header className={` ${styles.header}`}>
    </header>
    <h1 className={`text-shadow text-center ${styles.titulo}`}>18.Drinks</h1>
    {
      user ? (
        <div>
      <Link className={"btn btn-primary ms-3 mt-3"} to={'/user/profile'}>
        <i className="fas fa-user fa-lg"></i> Hola, {user.name}
      </Link>
      <Link to={'/'} onClick={handleLogout} className={"btn btn-danger ms-3 mt-3"} >
      <i className="fas fa-sign-out-alt fa-lg"></i> Salir
      </Link>
      </div>
      ) : (
        <div>
      <Link className={"btn btn-primary ms-3 mt-3"} to={'/login'}>
      <i className="fas fa-sign-in-alt fa-lg"></i> Login
      </Link>
      <Link className={"btn btn-danger ms-3 mt-3"} to={'/'}>
      <i className="fas fa-home fa-lg"></i> Inicio
      </Link>
        </div>
     
      )
      
    }

   
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
