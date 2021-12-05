import { useParams } from "react-router"
import { useState, useEffect } from 'react'
import { Container, Col, Row, Button } from 'react-bootstrap'
import api from "../services/api";
import Wrapper from "../components/Wrapper";
import styles from './ProdutoDetalhes.module.scss'
import SmallSpinner from "../components/SmallSpinner";
import { Helmet } from "react-helmet";

export default function ProdutoDetalhes(){

    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)

    const { produtoId } = useParams();

    useEffect(()=>{
        async function loadProduct(){
            try{
                const response = await api.get(`products/${produtoId}`)
                setProduct(response.data)
            }catch(e){
                console.log(e);
            }
            
        }
        loadProduct()
    })

    useEffect(()=>{
        if(product){
            setLoading(false)
        }
    }, [product])

    return(
        <>
        {
            loading ? (
                <SmallSpinner />
            )
            :
            (
            <>
            <Helmet>
                <title>CTD Commerce | {product.title} </title>
            </Helmet>
            <Container className={styles.container}>
                <Wrapper>
                <Col className={styles.colImage} >
                    <img className={styles.imagem} src={product.image} alt="produto" />
                </Col>
                <Row className={styles.linha}>
                    <Col className={styles.colDesc} md={7}>
                        <h2 className={styles.nome}>{product.title}</h2>
                        <p className={styles.preco}>R$ {product.price}</p>
                        <p>{product.description}</p>
                    </Col>
                    <Col className={styles.colButton} md={5}>
                        <div className="d-grid gap-4">
                            <Button className={styles.botao} variant="primary" size="lg">
                                Comprar
                            </Button>
                            <Button className={styles.botao} variant="secondary" size="lg">
                                Adicionar ao Carrinho
                            </Button>
                        </div>
                    </Col>
                </Row>
                </Wrapper>      
            </ Container>
            </>
            )
        }
        </>
    )
}