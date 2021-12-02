import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Produto from "../components/Produto";
import api from "../services/api";
import { Container, Row, Col } from "react-bootstrap";
import styles from './Produtos.module.scss'
import SmallSpinner from "../components/SmallSpinner";
 
export default function Produtos(){

    const [products, setProducts] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const categorias = ['Cama', 'Mesa', 'Banho', 'Gamer', 'Roupa', 'Acessórios', 'Ventiladores', 'Monitores', 'Celulares', "Caixas d'água"]

    useEffect(() => {
        const load = async () => {
            try{
                const response = await api.get("products")
                setProducts(response.data)
            } catch(e) {
                setError("Não foi possível carregar os produtos")
            }
        }
        load()
    }, [])

    useEffect(() => {
        if (products) {
            setLoading(false)
        }
    }, [products])


    return(
        <>
            <Helmet>
                <title>CTD Commerce | Produtos</title>
            </Helmet>

            {
                error ? (
                    <p>{error}</p>
                ) : loading ? (
                    <SmallSpinner />
                ) : (
                    <Container>
                        <Row className={styles.linha}>
                        <Col sm={12} md={3} xl={2} className={`d-lg-block ${styles.categorias}`}>
                            <h2 className={styles.title}>Categorias</h2>
                            { categorias.map((categoria) => <p className={styles.categoria}>{categoria}</p> )}
                        </Col>
                        <Col md={3}>
                                <ul>
                                    {products.length > 0 && products.map(({id, title, price, image})=>{
                                            return(
                                                <>
                                                    <Produto key={id} identidade={id} title={title} price={price} image={image} />
                                                </>
                                            )
                                        }
                                    )}
                                </ul>
                            </Col>
                            <Col md={3}>
                                <ul>
                                    {products.length > 0 && products.map(({id, title, price, image})=>{
                                            return(
                                                <>
                                                    <Produto key={id} identidade={id} title={title} price={price} image={image} />
                                                </>
                                            )
                                        }
                                    )}
                                </ul>
                            </Col>
                            <Col md={3}>
                                <ul>
                                    {products.length > 0 && products.map(({id, title, price, image})=>{
                                            return(
                                                <>
                                                    <Produto key={id} identidade={id} title={title} price={price} image={image} />
                                                </>
                                            )
                                        }
                                    )}
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                )
            }
        </>
    )
}