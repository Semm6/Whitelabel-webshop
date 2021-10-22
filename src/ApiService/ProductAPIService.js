const PRODUCTS_REST_API = 'http://localhost:8085/api/products/';


class ProductAPIService {   

    getProducts(){
        return fetch(PRODUCTS_REST_API,{ 
        })
        .then(res => res.json());        
    }
}

export default new ProductAPIService();
