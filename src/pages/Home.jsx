import { Row, Col, Carousel, Container } from 'react-bootstrap'
import Meta from "../components/Meta"
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import api from "../services/api";
import Produto from "../components/Produto";
import styles from './Home.module.scss'
import SmallSpinner from "../components/SmallSpinner";

export default function Home(){

    const [products, setProducts] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const load = async () => {
            setProducts(null)
            try{
                const response = await api.get("products")
                setProducts(response.data)
                setLoading(false)
            } catch(e) {
                setError("Não foi possível carregar os produtos")
            }
        }
        load()
    }, [])

    return(
        <>
            <Meta title={"Início"} />
            { error ? (<Container><Row><Col sm={12} md={6} lg={4} xl={3}><p>{error}</p></Col></Row></Container>)
            : loading ? (
                <SmallSpinner/>
            )
            : (
                <>
                    <Container className={styles.container}>
                        <h1>Destaques</h1>
                        <Carousel variant="dark">
                            <Carousel.Item className={styles.item}>
                                <Row className={styles.linha}>
                                    {
                                        products && (
                                            <>
                                            <Col md={3} sm={6} className={styles.produto}>
                                                <Produto identidade={products[0].id} title={products[0].title} price={products[0].price} image={products[0].image} />
                                            </Col>
                                            <Col md={3} sm={6} className={`d-none d-sm-block ${styles.produto}`}>
                                                <Produto identidade={products[1].id} title={products[1].title} price={products[1].price} image={products[1].image} />
                                            </Col> 
                                            <Col md={3} sm={6} className={`d-none d-lg-block ${styles.produto}`}>
                                                <Produto identidade={products[2].id} title={products[2].title} price={products[2].price} image={products[2].image} />
                                            </Col> 
                                            </>
                                        )
                                    }
                                </Row>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Row className={styles.linha}>
                                    {
                                        products && (
                                            <>
                                            <Col md={3} sm={6} className={styles.produto}>
                                                <Produto identidade={products[3].id} title={products[3].title} price={products[3].price} image={products[3].image} />
                                            </Col>
                                            <Col md={3} sm={6} className={`d-none d-sm-block ${styles.produto}`}>
                                                <Produto identidade={products[4].id} title={products[4].title} price={products[4].price} image={products[4].image} />
                                            </Col> 
                                            <Col md={3} sm={6} className={`d-none d-lg-block ${styles.produto}`}>
                                                <Produto identidade={products[5].id} title={products[5].title} price={products[5].price} image={products[5].image} />
                                            </Col> 
                                            </>
                                        )
                                    }
                                </Row>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Row className={styles.linha}>
                                    {
                                        products && (
                                            <>
                                            <Col md={3} sm={6} className={styles.produto}>
                                                <Produto identidade={products[6].id} title={products[6].title} price={products[6].price} image={products[6].image} />
                                            </Col>
                                            <Col md={3} sm={6} className={`d-none d-sm-block ${styles.produto}`}>
                                                <Produto identidade={products[7].id} title={products[7].title} price={products[7].price} image={products[7].image} />
                                            </Col> 
                                            <Col md={3} sm={6} className={`d-none d-lg-block ${styles.produto}`}>
                                                <Produto identidade={products[8].id} title={products[8].title} price={products[8].price} image={products[8].image} />
                                            </Col> 
                                            </>
                                        )
                                    }
                                </Row>
                            </Carousel.Item>
                        </Carousel>

                        <div className={styles.ofertas}>
                            <div className={styles.title}>
                                <h2>Ofertas do dia </h2>
                                <Link to="produtos">Ver todas</ Link>
                            </div>
                            <div className={styles.produtos}>
                                {   products && (
                                    products.splice(9, 4).map(({id, title, price, image})=>{
                                        return(
                                            <Col className={styles.produto} key={id}>
                                                <Produto identidade={id} title={title} price={price} image={image} />
                                            </Col>
                                        )
                                    })
                                )
                                }
                            </div>
                        </div>

                        <div className={styles.categorias}>
                            <h3>Categorias</h3>
                            <div className={styles.icones}>
                                <Link className={styles.categoria} to="/produtos/categoria/jewelery">
                                    <img src="/images/joias.png" alt="" />
                                    <p>Joias</p>
                                </Link>
                                <Link className={styles.categoria} to="/produtos/categoria/electronics">
                                    <img src="/images/eletronicos.png" alt="" />
                                    <p>Eletrônicos</p>
                                </Link>
                                <Link className={styles.categoria} to="/produtos/categoria/men's clothing">
                                    <img src="/images/camisa.png" alt="" />
                                    <p>Roupa Masculina</p>
                                </Link>
                                <Link className={styles.categoria} to="/produtos/categoria/women's clothing">
                                    <img src="/images/vestido.png" alt="" />
                                    <p>Roupa Feminina</p>
                                </Link>
                            </div>
                        </div>
                    </Container>
                </>
            )
        }
        </>
    )
}