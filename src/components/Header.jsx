import { Link } from 'react-router-dom'

export default function Header(){
    return(
        <header>
            <nav>
                <img src="" alt="logo" />
                <Link to="">Início</Link>
                <Link to="">Produtos</Link>
                <Link to="">Carrinho</Link>
                <Link to="">Sobre</Link>
            </nav>
        </header>
    )
}