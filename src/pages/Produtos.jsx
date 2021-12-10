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

    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errors, setErrors] = useState({});

    const { categoria } = useParams();

    const traduzir = cat => {
        const catMatrix = [
          {  condition: "electronics", result: "Eletrônicos"  },
          {  condition: "jewelery", result: "Joias"  },
          {  condition: "men's clothing", result: "Vestuário Masculino"  },
          {  condition: "women's clothing", result: "Vestuário Feminino"  }
        ]
        const category = catMatrix.find(c => c.condition === cat);
        return category ? category.result : cat
    };

    useEffect(() => {
        const load = async () => {
            setErrors({});
            setCategories([]);
            setLoading(true);
            try {
                const categoriesResponse = await api.get("products/categories");
                setCategories(categoriesResponse.data.map(category => ({ id: category.id, en: category.name, pt: traduzir(category.name)})));
            } catch (error) {
                setErrors(errors => ({...errors, categories: "Não foi possível carregar as categorias"}));
                setLoading(false);
            }
        }
        load()
    }, []);

    useEffect(() => {
        const load = async () => {
            setErrors({});
            setProducts(null);
            setLoading(true);
            try{
                if(!categoria){
                    const response = await api.get("products");
                    setProducts(response.data);
                }else{
                    const response = await api.get(`products/categories/${categories.find(c => c.en === categoria).id}`);
                    setProducts(response.data.products);
                };
            } catch(e) {
                setErrors(errors => ({...errors, products: "Não foi possível carregar os produtos"}));
                setLoading(false);
            }
            
        }
        load()
    }, [categoria, categories]);

    useEffect(() => {
        if (products && categories) {
            setLoading(false);
        }
    }, [products, categories]);

    return(
        <>
            <Meta title="Produtos" />
            <Container>
                <h1 className={styles.h1}>Produtos {categoria ? <>- {traduzir(categoria)}</> : ''}</h1>
                { 
                    loading ? <SmallSpinner /> 
                    : (
                        <Wrapper>
                            {
                                errors.categories ? <Col sm={12} md={3} xl={2}><p>{errors.categories}</p></Col>
                                : <Categorias categorias={categories} />
                            }
                            {
                                <Row className={styles.linha}>
                                {
                                    errors.products ? (<Col sm={12}><p>{errors.products}</p></Col>)
                                    : products && products.map(({id, title, price, image}) => (
                                        <Col sm={12} md={6} lg={4} xl={3} key={id}>
                                            <Produto identidade={id} title={title} price={price} image={image} />
                                        </Col>
                                    ))
                                }
                                </Row>
                            }
                        </Wrapper>
                    )
                }
            </Container>
        </>
    )
}