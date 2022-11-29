import React, {useEffect, useState} from "react";
import "../../Styles/App.css";
import Button from "react-bootstrap/Button";
import {api} from "../../Services/api";


function Product() {
    const [products, setProducts] = useState([]);

    function getProducts() {
        api.get('/product').then(res => setProducts(res.data))
    }
    useEffect(() => {
        getProducts();
    }, [])

    function createOrder(productId) {
        const userid = localStorage.getItem("@grocery:userid")
        api.post(`/order/${userid}/${productId}`).then(() => {
            alert('Reserva feita com sucesso!')
            getProducts();
        })
    }

    return (
        <div>

                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Item: </th>
                                <th scope="col">Estoque: </th>
                                <th scope="col">Valor (R$): </th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {products && products.map(item => (
                                <tr>
                                    <td className="align-middle">{item.name}</td>
                                    <td className="align-middle">{item.stock}</td>
                                    <td className="align-middle">{item.price}</td>
                                    <td>
                                        <Button className="bt-product" variant="primary" size="sm" onClick={() => createOrder(item.id)}>Reservar</Button>
                                    </td>
                                </tr>
                            )) }

                        </tbody>
                    </table>
                </div>
        </div>
    );
}

export default Product;
