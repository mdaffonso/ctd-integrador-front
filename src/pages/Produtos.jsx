import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Produto from "../components/Produto";
import api from "../services/api";
import { Container, Row, Col } from "react-bootstrap";
import styles from './Produtos.module.scss'
 
export default function Produtos(){

    const [products, setProducts] = useState([]);
    const categorias = ['Cama', 'Mesa', 'Banho', 'Gamer', 'Roupa', 'Acessórios', 'Ventiladores', 'Monitores', 'Celulares', "Caixas d'água"]

    useEffect(()=>{
        async function loadProducts(){
            try{
                const response = await api.get("products")
                setProducts(response.data)
            }catch(e){
                console.log(e);
            }
            
        }
        loadProducts()
    })


    return(
            <>
            <Helmet>
                <title>CTD Commerce | Produtos</title>
            </Helmet>
            <div>
                <Container>
                    <Row className={`d-block d-lg-none ${styles.catIcon}`}>
                        <h2>Categorias</h2>
                        <p>PEDIR AJUDA PRO AFFONSO</p>
                    </Row>
                    <Row className={styles.linha}>
                    <Col md={3} className={`d-none d-lg-block ${styles.categorias}`}>
                        <p className={styles.title}>Categorias</p>
                        {categorias.map((c)=>{
                            return (
                                <p>- {c}</p>
                            )
                        })}
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
                
            </div>
        </>
    )
}