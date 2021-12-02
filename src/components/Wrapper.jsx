import styles from './Wrapper.module.scss'

export default function Wrapper(props){
    return(
        <div className={styles.productsWrapper}>
            {props.children}
        </div>
    )
}