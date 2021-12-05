import styles from "./Colaborador.module.scss"
import { Card } from "react-bootstrap"

export default function Colaborador (props) {
  return (
    <>
        <Card className={styles.cartao}>
            <Card.Img className={styles.img} variant="top" src={props.image} alt={`foto de ${props.nome}`} />
            <Card.Body className={styles.corpo}>
                <Card.Title className={styles.preco}>{props.nome}</Card.Title>
                <Card.Text className={styles.desc}>
                    {props.descricao}
                </Card.Text>
                <Card.Text as="div" className={styles.descSobre}>
                    <img src="/images/linkedin.png" alt="linkedin logo" />
                    <a className={styles.link} href={props.linkedin} rel="noreferrer" target="_blank">
                        Linkedin
                    </a>
                </Card.Text>
                <Card.Text className={styles.descSobre}>
                    <img src="/images/github.png" alt="github logo" />
                    <a className={styles.link} href={props.github} rel="noreferrer" target="_blank">
                        Github
                    </a>
                </Card.Text>
            </Card.Body>
        </Card>
    </>
  )
}