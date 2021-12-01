import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Produto from "../components/Produto";
import api from "../services/api";
import styles from './Produtos.module.scss'

export default function Produtos(){

    const [products, setProducts] = useState([]);

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
                <h1>Produtos</h1>
                <ul>
                    {products.length > 0 && products.map(({title, price, image})=>{
                            return(
                                <Produto title={title} price={price} image={image} />
                            )
                        }
                    )}
                </ul>
            </div>
        </>
    )
}