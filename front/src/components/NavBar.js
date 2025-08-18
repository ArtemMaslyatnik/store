import { useContext} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import {Context} from '../index'
import {REGISTRATION_ROUTE, SHOP_ROUTE, LOGIN_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";

const NavBar = observer(() => {
  const {user} = useContext(Context) 
  const userName = user.user;

  return (
       <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href={SHOP_ROUTE}>Вазон</Navbar.Brand>
            {user.isAuth ?
              <Nav className="me-auto">
                <Nav.Link href={SHOP_ROUTE}>{userName}</Nav.Link> 
               <Button 
                variant="light"
                onClick={() => user.logout()}
                >
                  Выйти
                </Button>
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
});

export default NavBar;