import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { CartProvider } from "./context/CartProvider";
import { CategoriesProvider } from "./context/CategoriesProvider";
import { DrinksProvider } from "./context/DrinksProvider";
import { AuthProvider } from "./context/AuthProvider";
import { MainLayout } from "./layouts";
import { AppRoutes } from "./routes";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
    <AuthProvider>
      <CategoriesProvider>
        <DrinksProvider>
          <CartProvider>
            <MainLayout>
              <AppRoutes />
            </MainLayout>
          </CartProvider>
        </DrinksProvider>
      </CategoriesProvider>
    </AuthProvider>
    </Router>
  );
}

export default App;
