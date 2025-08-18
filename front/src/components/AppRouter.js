import React, { useContext } from "react";
import {Routes, Route, Navigate } from 'react-router-dom'
import {authRoutes, publicRoutes} from '../routes';
import {SHOP_ROUTE} from '../utils/consts';
import { Context } from "../index";
import {observer} from "mobx-react-lite";

const AppRouter = observer(() => {
    const {user} = useContext(Context);
    return (
        <Routes>
            {user.isAuth && authRoutes.map(({path, Element}) =>
                <Route key={path} path={path} element={Element} exact/>
            )}
            {publicRoutes.map(({path, Element}) =>
                <Route key={path} path={path} element={Element} exact/>
            )}
            <Route path="/" element={<Navigate to={SHOP_ROUTE} replace />} />
        </Routes>
    );
});

export default AppRouter;