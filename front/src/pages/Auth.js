import React, {useContext, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Form from 'react-bootstrap/Form';
import {observer} from "mobx-react-lite";
import {NavLink, useLocation, useNavigate } from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {Context} from "../index";


const Auth = observer(() => {
  const {user} = useContext(Context)
  const location = useLocation()
  const navigate = useNavigate ()
  const isLogin = location.pathname === LOGIN_ROUTE
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')


  const click = async () => {
      try {
          if (isLogin) {
              user.login(email, password);
          } else {
              user.registration(email, username, password);
          }
          navigate(SHOP_ROUTE)
      } catch (e) {
          console.log(e)
      }

  }
  
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{height: window.innerHeight - 54}}
    >
      <Card style={{width: 600}} className="p-5">
        <h2 className="m-auto">{isLogin ? 'Авторизация' : "Регистрация"}</h2>
        <Form>
          <Form.Group className="d-flex flex-column">
            <Form.Label>Email адрес</Form.Label>
            <Form.Control 
              type="email" 
              value={email}
              onChange={e => setEmail(e.target.value)}
              />
            <Form.Text className="text-muted">
            </Form.Text>
          </Form.Group>
          {isLogin ? '' : 
            <Form.Group className="d-flex flex-column">
              <Form.Label>Имя пользователя</Form.Label>
              <Form.Control 
                value={username}
                onChange={e => setUsername(e.target.value)} 
              />
              <Form.Text className="text-muted">
              </Form.Text>
            </Form.Group>
          }
          <Form.Group className="mb-3">
            <Form.Label>Пароль</Form.Label>
            <Form.Control 
              type="password" 
              value={password}
              onChange={e => setPassword(e.target.value)} 
            />
          </Form.Group>
          <Form.Group className="d-flex justify-content-between mt-3 pl-3 pr-3" controlId="formBasicCheckbox">
              {isLogin ?
                <div>
                    <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
                </div>
                :
                <div>
                    <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
                </div>
              }
              <Button
                  variant={"outline-success"}
                  onClick={click}
              >{isLogin ? 'Войти' : 'Регистрация'}
              </Button>
          </Form.Group>
        </Form>
      </Card>
    </Container>
  );
});

export default Auth;