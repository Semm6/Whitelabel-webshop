const PRODUCTS_REST_API = 'http://localhost:9090/api/products';


class ProductAPIService {   

    getProducts(){
        return fetch(PRODUCTS_REST_API,{ 
            method: 'get',
                headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                },
                'credentials': 'same-origin'
        })
        .then(res => res.json());        
    }



}

export default new ProductAPIService();

