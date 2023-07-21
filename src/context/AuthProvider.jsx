import { useState } from 'react'
import {createContext} from 'react'
import { PropTypes } from "prop-types";
import { loginAuthService, profileUserService } from '../services/auth.service';
import jwtDecode from 'jwt-decode';

const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

const [user, setUser] = useState(null);
const [alert, setAlert] = useState(null);
const [userProfile, setUserProfile] = useState(null)

const handleAlert = (error) => {
    setAlert(error.message)
    setTimeout(() => {
        setAlert(null)
    }, 5000);
}

const login = async (info) => {

    try {

     const {token} = await  loginAuthService(info);
     sessionStorage.setItem('DrinksToken', token)
     const decodedToken = token ? jwtDecode(token) : null;

     setUser(decodedToken.user)
    } catch (error) {
        //console.log(error);
       handleAlert(error)
    }

  /*   setUser('Ezequiel') */
}

const getProfile = async() => {
    try {
      const token = sessionStorage.getItem('DrinksToken');

      if(!token){
        return null
      }

      const response = await profileUserService(token)

      console.log(response);

      setUserProfile(response.user)

    } catch (error) {
        handleAlert(error)
    }
}

const logout = () => {
    setUser(null)
}

const contextValue = {
    user,
    userProfile,
    login, 
    logout,
    alert,
    getProfile
}


  return (
   <AuthContext.Provider value={contextValue}>
    {children}
   </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
    children : PropTypes.node.isRequired
}


export {
    AuthContext,
    AuthProvider
}