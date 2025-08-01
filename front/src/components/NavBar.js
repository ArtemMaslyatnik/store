import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Context} from '../index'
import {REGISTRATION_ROUTE, SHOP_ROUTE, LOGIN_ROUTE} from "../utils/consts";

const NavBar = () => {
  const {user} = useContext(Context) 
  return (
       <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href={SHOP_ROUTE}>Вазон</Navbar.Brand>
            {user.isAuth ?
              <Nav className="me-auto">
                <Nav.Link href={SHOP_ROUTE}>{user.isAuth}</Nav.Link>
                <Nav.Link href={SHOP_ROUTE}>Выйти</Nav.Link>
              </Nav> 
              :
              <Nav className="me-auto">
                <Nav.Link href={LOGIN_ROUTE}>Войти</Nav.Link>
                <Nav.Link href={REGISTRATION_ROUTE}>Регистрация</Nav.Link>
              </Nav>
            }
        </Container>
      </Navbar>
  );
}

export default NavBar;