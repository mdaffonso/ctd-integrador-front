import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Carrinho from './pages/Carrinho';
import Home from './pages/Home';
import Produtos from './pages/Produtos'
import Sobre from './pages/Sobre';
import Header from './components/Header'

export default function RouteList(){
    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={ <Home />} />
                <Route path="produtos" element={ <Produtos />} />
                <Route path="carrinho" element={ <Carrinho />} />
                <Route path="sobre" element={ <Sobre />} />

            </Routes>
        </BrowserRouter>
    )
}