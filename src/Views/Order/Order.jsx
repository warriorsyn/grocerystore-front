import React, {useEffect, useState} from "react";
import "../../Styles/App.css";
import Button from "react-bootstrap/Button";
import {api} from "../../Services/api";

const token = "fase";

function Order() {
    const [orders, setOrder] = useState([]);
    const userid = localStorage.getItem("@grocery:userid");

    useEffect(() => {
        getOrders();
    }, [])

    function getOrders() {
        api.get(`/order/${userid}`).then(res => setOrder(res.data))
    }

    function deleteOrder(orderId) {
        api.delete(`/order/${orderId}`, {
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(() => {
            alert('Pedido removido com sucesso!')
            getOrders();
        })
    }



    return (
        <div>
            {token === "false" ? (
                <div class="App">
                    <div class="App-header">
                        <div className="cx">
                            <h1>Faça Login</h1>
                        </div>
                    </div>
                </div>
            ) :
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Produto: </th>
                                <th scope="col">Quantidade: </th>
                                <th scope="col">Valor unitário (R$): </th>
                                <th scope="col">Valor total (R$): </th>
                                <th scope="col">Status da Reserva: </th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.length && orders.map(item => (
                                <tr>
                                    <td className="align-middle">{item.product.name}</td>
                                    <td className="align-middle">{item.quantity}</td>
                                    <td className="align-middle">{item.product.price}</td>
                                    <td className="align-middle">{item.product.price * item.quantity}</td>
                                    <td className="align-middle">{item.isClosed ? 'Fechado' : 'Aberto'}</td>
                                    <td>
                                        <Button className="bt-order" variant="primary" size="sm" onClick={() => deleteOrder(item.id)}>Excluir Reserva</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            }
        </div >
    );
}

export default Order;
