import styles from "./Categorias.module.scss"
import { Col } from "react-bootstrap"
import { Link } from "react-router-dom"

export default function Categorias ({categorias}) {
  return (
      <Col sm={12} md={3} xl={2} className={`${styles.categorias}`}>
        <h2>Categorias</h2>
        <Link className={styles.categoria} to="/produtos">Todas</Link>
        {
          categorias.map(categoria => (
            <Link className={styles.categoria} key={categoria.id} to={`/produtos/categoria/${categoria.en}`}>{categoria.pt}</Link>
          ))
        }
    </Col>
  )
}