import Meta from "../components/Meta";
import { useParams, useNavigate } from "react-router";
import { useState, useEffect, useContext } from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';
import api from "../services/api";
import Wrapper from "../components/Wrapper";
import styles from './ProdutoDetalhes.module.scss';
import SmallSpinner from "../components/SmallSpinner";
import { CartContext } from "../contexts/CartContext";

export default function ProdutoDetalhes(){

    const navigate = useNavigate();
    const { addToCart } = useContext(CartContext);

    const [product, setProduct] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const { produtoId } = useParams();

    const buyNow = (item) => {
        addToCart(item);
        navigate(`/carrinho`, {replace: true});
    };

    useEffect(()=>{
        async function loadProduct(){
            try{
                const response = await api.get(`products/${produtoId}`);
                setProduct(response.data);
            }catch(e){
                setError("Não foi possível carregar os dados do produto");
            }
            
        }
        loadProduct()
    // eslint-disable-next-line
    }, []);

    useEffect(()=>{
        if(product){
            setLoading(false)
        }
    }, [product]);

    return(
        <>
        {
            error ? <Container><Row><Col sm={12} md={6} lg={4}><p>{error}</p></Col></Row></Container>
            : loading ? <SmallSpinner />
            :
            (
            <>
                <Meta title={product.title} />
                <Container className={styles.container}>
                    <Wrapper>
                        <Row className={styles.linha}>
                            <Col sm={12} lg={4} className={`d-flex flex-column align-items-center gap-4 ${styles.colImage}`}>
                                <img className={styles.imagem} src={product.image} alt="produto" />
                            </Col>
                            <Col className={styles.colDesc} sm={12} lg={6}>
                                <Button variant="outline-secondary" style={{margin: "0 0 2rem"}} onClick={() => navigate(-1)}>Voltar</Button>
                                <h2 className={styles.nome}>{product.title}</h2>
                                <p className={styles.preco}>R$ {product.price.replace(".", ",")}</p>
                                <p>{product.description}</p>
                            </Col>
                            <Col className={styles.colButton} sm={12} lg={2}>
                                <div className="d-grid gap-2">
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