import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import styles from "./index.module.css"
import { Container } from "react-bootstrap"
import PropTypes   from 'prop-types'

export const MainLayout = ({children}) => {
  return (
    <div className={styles.main}>
        <Header/>
        <Container className="mt-5">
        {children}
        </Container>
        <Footer/>
    </div>
  )
}

MainLayout.propTypes = {
    children : PropTypes.node.isRequired
}