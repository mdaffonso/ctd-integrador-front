import styles from './Produto.module.scss'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Produto(props){

    return(
        <>
            <Link className={styles.link} to={`/produtos/${props.identidade}`}>
                <Card className={styles.cartao}>
                    <Card.Body className={styles.imgContainer}>
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
}