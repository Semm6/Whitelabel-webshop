import React from 'react'
import "../Style/shop.css";
import APIService from '../ApiService/ProductAPIService'

export default class Shop extends React.Component {

    constructor(props) {
        super(props)
    
        this.state = {
             product: []
        }
    }
    
    componentDidMount(){
        APIService.getProducts().then((data) => {
            this.setState({ product: data })
            console.log(this.state.data)
          })
          .catch(function (ex) {
              console.log('Response parsing failed. Error: ', ex);
          });;
    }

    render() {
        return (
            <div>
                <h2 className="header">Shop</h2>
                <div>{ 
                        this.state.product.map(product =>
                                    <div className="column">
                                            <div className="card">
                                            <div><img className="cardimg" src={product.image} /></div>
                                            <h6>{product.name}</h6>
                                            <p>€{product.price}</p>
                                            <div><button className="button"><p>+</p></button></div>
                                        </div>       
                                    </div>
                        )
                        }</div>
            </div>
        )
    }
}