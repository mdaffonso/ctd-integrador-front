import styles from './Produto.module.scss'
import { Card } from 'react-bootstrap'

export default function Produto(props){

    return(
        <>
        <a className={styles.link} href={`${window.location}/${props.identidade}`} >
            <Card className={styles.cartao}>
                <Card.Img className={styles.img} variant="top" src={props.image} alt="product" />
                <Card.Body className={styles.corpo}>
                    <Card.Title className={styles.preco}>R$ {props.price}</Card.Title>
                    <Card.Text className={styles.desc}>
                        {props.title}
                    </Card.Text>

                </Card.Body>
            </Card>
        </a>
        </>
    )
}