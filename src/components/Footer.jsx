import { Container, Row, Col } from "react-bootstrap"
import styles from "./Footer.module.scss"

export default function Footer () {
  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }
  return (
    <div className={styles.footerWrapper}>
      <button className={styles.top} onClick={scrollToTop}>Voltar para o topo</button>
      <div className={styles.footer}>
        <Container>
          <Row>
            <Col sm={12} lg={6}>
              <ul>
                <li>&copy; 2021 — CTD Commerce Ltda. Todos os direitos reservados.</li>
                <li>CNPJ 00.000.000/0001-00</li>
                <li>Rua Sem Nome, nº 1, sala A</li>
                <li>São Paulo, SP</li>
              </ul>
            </Col>
            <Col sm={12} lg={6} className={styles.icons}>
              <img src="/images/ico-facebook.png" alt="ícone do facebook" className={styles.icon} />
              <img src="/images/ico-instagram.png" alt="ícone do instagram" className={styles.icon} />
              <img src="/images/ico-whatsapp.png" alt="ícone do whatsapp" className={styles.icon} />
              <img src="/images/ico-tiktok.png" alt="ícone do tiktok" className={styles.icon} />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}