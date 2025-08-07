import React, {useContext, useEffect} from 'react';
import {observer} from "mobx-react-lite";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Context} from "../index";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import {fetchBrands, fetchTypes, fetchDevices} from "../http/deviceAPI";
import Pages from "../components/Pages";


const Shop = observer(() => {
    const {device} = useContext(Context)
 
    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data.results))
        fetchBrands().then(data => device.setBrands(data.results))
        fetchDevices(null, null, device.offset, device.limit).then(data => {
                    device.setDevices(data.results)
                    device.setTotalCount(data.count)
                })
    }, [])

    useEffect(() => {
        fetchDevices(device.selectedType.id, device.selectedBrand.id, device.offset, device.limit).then(data => {
            device.setDevices(data.results)
            device.setTotalCount(data.count)
        })
    }, [device.offset, device.selectedType, device.selectedBrand,])

    return (
        <Container>
            <Row className="mt-2">
                <Col md={3}>
                  <TypeBar/>
                </Col>
                <Col md={9}>
                  <BrandBar/>
                  <DeviceList/>
                  <Pages/>
                </Col>
            </Row>
        </Container>
    );
});

export default Shop;