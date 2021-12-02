import { Container } from 'react-bootstrap'
import styles from './SmallSpinner.module.scss'

const SmallSpinner = () => {
    return (
        <Container className={styles.container}>
            <div className={styles.spinner}>
                <div className={styles.SmallSpinner} />
            </div>
        </Container>
    )
}

export default SmallSpinner