import styles from './Produto.module.scss'

export default function Produto(props){
    return(
        <li>
            <h2>{props.title}</h2>
            <h3>R$ {props.price}</h3>
            <img src={props.image} alt="product" className={styles.image} />
        </li>
    )
}