import React, {useContext, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Form from 'react-bootstrap/Form';
import {observer} from "mobx-react-lite";
import {NavLink, useLocation, useHistory} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";

const Auth = observer(() => {

  const location = useLocation()
  const isLogin = location.pathname === LOGIN_ROUTE
  
  console.log(location)
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{height: window.innerHeight - 54}}
    >
      <Card style={{width: 600}} className="p-5">
        <h2 className="m-auto">{isLogin ? 'Авторизация' : "Регистрация"}</h2>
        <Form>
          <Form.Group className="d-flex flex-column" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="d-flex justify-content-between mt-3 pl-3 pr-3" controlId="formBasicCheckbox">
              {isLogin ?
                <div>
                    Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
                </div>
                :
                <div>
                    Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
                </div>
              }
              <Button
                  variant={"outline-success"}
                  type="submit"
              >{isLogin ? 'Войти' : 'Регистрация'}
              </Button>
          </Form.Group>
        </Form>
      </Card>
    </Container>
  );
});

export default Auth;