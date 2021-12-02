import { Link } from 'react-router-dom'
import { Navbar, Container, Nav } from 'react-bootstrap'
import styles from './Header.module.scss'

export default function Header(){
    return(
        <header className={styles.header}>
            <Navbar className={styles.navbar} collapseOnSelect expand="md" bg="dark" variant="dark">
                <Container>
                <Link className={styles.logo} to="/">
                    <img src="/images/rettiwt.png" className={styles.image} alt="logo" />
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className={`me-auto ${styles.links}`}>
                        <Link className={styles.link} to="/">Início</Link>
                        <Link className={styles.link} to="/produtos">Produtos</Link>
                        <Link className={styles.link} to="/carrinho">Carrinho</Link>
                        <Link className={styles.link} to="/sobre">Sobre</Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}