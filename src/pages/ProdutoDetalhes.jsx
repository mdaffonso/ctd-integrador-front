import Meta from "../components/Meta"
import { useParams, useNavigate } from "react-router"
import { useState, useEffect, useContext } from 'react'
import { Container, Col, Row, Button } from 'react-bootstrap'
import api from "../services/api";
import Wrapper from "../components/Wrapper";
import styles from './ProdutoDetalhes.module.scss'
import SmallSpinner from "../components/SmallSpinner";
import { CartContext } from "../contexts/CartContext"

export default function ProdutoDetalhes(){

    const navigate = useNavigate()
    const { addToCart } = useContext(CartContext)

    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)

    const { produtoId } = useParams();

    const buyNow = (item) => {
        addToCart(item)
        navigate(`/carrinho`, {replace: true})
    }

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
            loading ? <SmallSpinner />
            :
            (
            <>
                <Meta title={product.title} />
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
                                    <Button className={styles.botao} variant="primary" size="lg" onClick={() => buyNow(product)}>
                                        Comprar
                                    </Button>
                                    <Button className={styles.botao} variant="secondary" size="lg" onClick={() => addToCart(product)}>
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