const PRODUCTS_REST_API = 'http://localhost:9192/api/products/';


class ProductAPIService {   

    getProducts(){
        return fetch(PRODUCTS_REST_API)
        .then(res => res.json());        
    }
}

export default new ProductAPIService();
