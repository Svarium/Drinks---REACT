import React, { useContext } from 'react'
import { UserContext } from '../context/UserProvider'

const useUser = () => {
  return useContext(UserContext)
}

export default useUser
