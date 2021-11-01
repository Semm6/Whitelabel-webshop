import React from 'react'
import "../Style/shop.css";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import ProductCard from '../Components/ProductCard';
import useFetch from '../ApiService/useFetch';


const Shop = () => {

    const { data: products, error, isPending } = useFetch('http://localhost:8085/api/products/');

        return (
            <div>
                <Container>
                    <Row>
                        <h1>Products</h1>   
                        { error && <div>{ error }</div> }
                        { isPending && <div>Loading...</div> }
                        { products && <ProductCard products={products} /> }
                    </Row>
                </Container>
            </div>
        )
}

export default Shop;