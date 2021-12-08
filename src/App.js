import './App.css';
import RouteList from './RouteList';
import { HelmetProvider } from "react-helmet-async"
import { CartProvider } from "./contexts/CartContext"
import { MainProvider } from "./contexts/MainContext"

function App() {
  return (
    <MainProvider>
      <CartProvider>
        <HelmetProvider>
          <RouteList />
        </HelmetProvider>
      </CartProvider>
    </MainProvider>
  );
}

export default App;
