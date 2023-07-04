import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { UserProvider } from './context/UserProvider'
import { MainLayout } from './layouts'
import { AppRoutes } from './routes'


function App() {
  return (
   <UserProvider>
    <MainLayout>
      <AppRoutes/>
    </MainLayout>      
   </UserProvider>  
  )
}

export default App
