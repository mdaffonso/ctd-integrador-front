import styles from './Produto.module.scss'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Produto(props){

    return(
        props.identidade ? (
            <>
                <Link className={styles.link} to={`/produtos/${props.identidade}`}>
                    <Card className={styles.cartao}>
                        <Card.Body>
                            <Card.Img className={styles.img} variant="top" src={props.image} alt="product" />
                        </Card.Body>
                        <Card.Body className={styles.corpo}>
                            <Card.Title className={styles.preco}>$ {props.price}</Card.Title>
                            <Card.Text className={styles.desc}>
                                {props.title}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Link>
            </>
        )
        :
        (
            <>
                <Card className={styles.cartaoSobre}>
                    <Card.Body>
                        <Card.Img className={styles.imgSobre} variant="top" src={props.image} alt="product" />
                    </Card.Body>
                    <Card.Body className={styles.corpo}>
                        <Card.Title className={styles.preco}>{props.nome}</Card.Title>
                        <Card.Text className={styles.desc}>
                            {props.descricao}
                        </Card.Text>
                        <Card.Text as="div" className={styles.descSobre}>
                            <img src="/images/linkedin.png" alt="github logo" />
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
    )
}