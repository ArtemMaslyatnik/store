import React, {useContext, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Row} from "react-bootstrap";
import {fetchUserBasket} from "../http/basketAPI"

const Basket = observer(() => {
    const {basket} = useContext(Context)
    const {id} = useParams()
    useEffect(() => {
        console.log('1')
        fetchUserBasket('1').then(data => basket.setUser(data))

        }, [])
    console.log(basket)
    return (
        <Row className="d-flex">
            <h1>Карзина</h1>
            {basket.basketdevices.map(basket =>
                <Row key={basket.id} >
                </Row>
            )}
        </Row>
    );
});

export default Basket;