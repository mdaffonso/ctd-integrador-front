import { Link } from 'react-router-dom'

export default function Header(){
    return(
        <header>
            <nav>
                <img src="" alt="logo" />
                <Link to="/">Início</Link>
                <Link to="/produtos">Produtos</Link>
                <Link to="/carrinho">Carrinho</Link>
                <Link to="/sobre">Sobre</Link>
            </nav>
        </header>
    )
}