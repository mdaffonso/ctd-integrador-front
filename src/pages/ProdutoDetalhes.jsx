import { useParams } from "react-router"
import { useState, useEffect } from 'react'
import api from "../services/api";


export default function ProdutoDetalhes(){

    const [product, setProduct] = useState()

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

    return(
        <>
            <h1>Produto</h1>
            {product && (
                <>
                    <p>{product.title}</p>
                    <p>{product.price}</p>
                    <p>{product.category}</p>
                    <p>{product.description}</p>
                    <img src={product.image} alt="produto" />
                </>
            )}
        </>
    )
}