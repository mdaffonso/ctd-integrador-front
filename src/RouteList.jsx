import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Carrinho from './pages/Carrinho';
import Home from './pages/Home';
import Produtos from './pages/Produtos'
import Sobre from './pages/Sobre';
import Header from './components/Header'
import Footer from "./components/Footer"
import ProdutoDetalhes from './pages/ProdutoDetalhes';
import NotFound from './pages/NotFound';

export default function RouteList(){
    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={ <Home />} />
                <Route path="produtos" element={ <Produtos />} />
                <Route path="/produtos/categoria/:categoria" element={<Produtos />} />
                <Route path="/produtos/:produtoId" element={<ProdutoDetalhes />} />

                <Route path="carrinho" element={ <Carrinho />} />

                <Route path="sobre" element={ <Sobre />} />

                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}