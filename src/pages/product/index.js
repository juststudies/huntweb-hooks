import React,{useState, useEffect} from 'react';
import api from '../../services/api';
import './styles.css';
import {Link} from 'react-router-dom';

function Product(props){
    const {id} = props.match.params;
    const [product, setProduct] = useState({});

    useEffect(()=>{
        async function matchProduct(){

        
            const response = await api.get(`/products/${id}`);
            setProduct(response.data);
        }
        matchProduct()
    }, [id]);
    
    return(
        <div className="product-info">
            <h1>{product.title}</h1>
            <p>{product.description}</p>

            <p>
                URL: <a href={product.url}>{product.url}</a>

            </p>
            <div className="retornar">
                <Link to={'/'}>Voltar</Link>
            </div>
        </div>
    );
}

export default Product;