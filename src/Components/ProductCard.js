import React from "react";

const ProductCard = ({products}) => {

    return (
        <div>   
          {products.map(product => (
            <div className="column">
                <div className="card">
                    <div><img className="cardimg" src={product.image}/></div>
                        <h6>{product.name}</h6>
                        <p>€{product.price}</p>
                </div>   
            </div>
            ))}
        </div>
    )}

export default ProductCard;
