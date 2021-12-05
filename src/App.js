import './App.css';
import RouteList from './RouteList';
import { HelmetProvider } from "react-helmet-async"
import { CartProvider } from "./contexts/CartContext"

function App() {
  return (
    <CartProvider>
      <HelmetProvider>
        <RouteList />
      </HelmetProvider>
    </CartProvider>
  );
}

export default App;
