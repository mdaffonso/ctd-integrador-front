import { Link } from 'react-router-dom'
import { useState, useEffect, useCallback } from "react"
import { Navbar, Container, Nav } from 'react-bootstrap'
import styles from './Header.module.scss'

export default function Header(){

    const [imageStyle, setImageStyle] = useState([styles.image])
    const [sequence, setSequence] = useState([])

    const flip = useCallback((e) => {
        setSequence(curr => {
            if (curr.length >= 7) {
                curr.shift()
            }
            curr.push(e.key)
            return curr
        })

        const secret = "twitter"
        const sequenceString = sequence.join("")

        const imageMatrix = [
            { condition: 1, value: [styles.image, styles.secret] },
            { condition: 2, value: [styles.image] }
        ]

        if (sequenceString.includes(secret)) {
            setSequence([])
            setImageStyle(imageMatrix.find(val => val.condition === imageStyle.length).value)
        }
    }, [sequence, imageStyle])

    useEffect(() => {
        document.addEventListener("keydown", flip)

        return () => document.removeEventListener("keydown", flip)
    }, [sequence, flip])

    return(
        <header className={styles.header}>
            <Navbar className={styles.navbar} collapseOnSelect expand="md" bg="dark" variant="dark">
                <Container>
                <Link className={styles.logo} to="/">
                    <img src="/images/rettiwt.png" className={imageStyle.join(" ")} onClick={flip} alt="logo" />
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