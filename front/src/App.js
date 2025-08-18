import React, {useContext, useEffect} from 'react';
import { BrowserRouter } from "react-router-dom";
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar';
import {observer} from "mobx-react-lite";
import {Context} from "./index";
import {Spinner} from "react-bootstrap";

const App = observer(() =>{
  
  const {user} = useContext(Context)
 
  useEffect(() => {
        if (localStorage.getItem('token')) {
            user.checkAuth()
        }
    }, [])

  if (user.isloading) {
      return <Spinner animation={"grow"}/>
  }
  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>

  );
});

export default App;
