import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { CartProvider } from "./context/CartProvider";
import { CategoriesProvider } from "./context/CategoriesProvider";
import { DrinksProvider } from "./context/DrinksProvider";
import { AuthProvider } from "./context/AuthProvider";
import { MainLayout } from "./layouts";
import { AppRoutes } from "./routes";

function App() {
  return (
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
  );
}

export default App;
