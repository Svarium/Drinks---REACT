import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { CategoriesProvider } from './context/CategoriesProvider'
import { DrinksProvider } from './context/DrinksProvider'
import { UserProvider } from './context/UserProvider'
import { MainLayout } from './layouts'
import { AppRoutes } from './routes'


function App() {
  return (
   <UserProvider>
    <CategoriesProvider>
      <DrinksProvider>
    <MainLayout>
      <AppRoutes/>
    </MainLayout>    
    </DrinksProvider>  
    </CategoriesProvider>
   </UserProvider>  
  )
}

export default App
