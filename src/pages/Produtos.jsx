import Meta from "../components/Meta"
import { useEffect, useState } from "react";
import Produto from "../components/Produto";
import api from "../services/api";
import { Container, Row, Col } from "react-bootstrap";
import styles from './Produtos.module.scss'
import SmallSpinner from "../components/SmallSpinner";
import Wrapper from "../components/Wrapper";
import { useParams } from "react-router-dom";
import Categorias from "../components/Categorias"
 
export default function Produtos(){

    const [products, setProducts] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const { categoria } = useParams();

    const traduzir = cat => {
        const catMatrix = [
          {  condition: "electronics", result: "Eletrônicos"  },
          {  condition: "jewelery", result: "Joias"  },
          {  condition: "men's clothing", result: "Vestuário Masculino"  },
          {  condition: "women's clothing", result: "Vestuário Feminino"  }
        ]
        return catMatrix.find(c => c.condition === cat).result
    }

    useEffect(() => {
        const load = async () => {
            setProducts(null)
            setLoading(true)
            try{
                if(!categoria){
                    const response = await api.get("products")
                    setProducts(response.data)
                }else{
                    const response = await api.get(`products/category/${categoria}`)
                    setProducts(response.data)
                }
            } catch(e) {
                setError("Não foi possível carregar os produtos")
            }
            
        }
        load()
    }, [categoria])

    useEffect(() => {
        if (products) {
            setLoading(false)
        }
    }, [products])

    return(
        <>
            <Meta title="Produtos" />
            <Container>
                <h1 className={styles.h1}>Produtos {categoria ? <>- {traduzir(categoria)}</> : ''}</h1>
                <Wrapper>
                    <Categorias />
                    {
                            error ? (<p>{error}</p>) : loading ? (<SmallSpinner />) :(
                            <Row className={styles.linha}>
                            {
                                products && products.map(({id, title, price, image}) => (
                                    <Col sm={12} md={6} lg={4} xl={3} key={id}>
                                        <Produto identidade={id} title={title} price={price} image={image} />
                                    </Col>
                                ))
                            }
                            </Row>
                        )
                    }
                </Wrapper>
            </Container>
        </>
    )
}