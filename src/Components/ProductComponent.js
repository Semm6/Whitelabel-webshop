import React from 'react'
import APIService from '../ApiService/ProductAPIService'

export default class ProductComponent extends React.Component {

    constructor(props) {
        super(props)
    
        this.state = {
             user: []
        }
    }
    
    componentDidMount(){
        APIService.getProducts().then((data) => {
            this.setState({ user: data })
            console.log(this.state.data)
          })
          .catch(function (ex) {
              console.log('Response parsing failed. Error: ', ex);
          });;
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Product Details</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.user.map(user =>
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.name}</td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}