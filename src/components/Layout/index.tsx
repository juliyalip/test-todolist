import {Outlet} from 'react-router-dom';
import React from 'react';
import AppBar from '../AppBar';
import Container from '../Container'


export default function Layout(){
    return(
        <div>
            <AppBar />
            <Container>
            <Outlet />
            </Container>
        </div>

    )
}
