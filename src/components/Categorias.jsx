import styles from "./Categorias.module.scss"
import { Col } from "react-bootstrap"
import { Link } from "react-router-dom"

export default function Categorias () {
  return (
      <Col sm={12} md={3} xl={2} className={`${styles.categorias}`}>
        <h2>Categorias</h2>
        <Link className={styles.categoria} to="/produtos">Todas</Link>
        <Link className={styles.categoria} to="/produtos/categoria/electronics">Eletrônicos</Link>
        <Link className={styles.categoria} to="/produtos/categoria/jewelery">Joias</Link>
        <Link className={styles.categoria} to="/produtos/categoria/men's clothing">Vestuário Masculino</Link>
        <Link className={styles.categoria} to="/produtos/categoria/women's clothing">Vestuário Feminino</Link>
    </Col>
  )
}