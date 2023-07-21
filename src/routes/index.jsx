import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { NotFound } from '../pages/NotFound'
import { Login } from '../pages/Login'
import { Profile } from '../pages/profile'
import { ProtectedRoutes } from './protectedRoutes'


export const AppRoutes = () => {
  return (
   
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='*' element={<NotFound/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/user' element={<ProtectedRoutes/>}>
            <Route path='profile' element={<Profile/>} />
            </Route>
        </Routes>
    
  )
}
