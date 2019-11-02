import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, withRouter } from "react-router-dom";
import styled from 'styled-components';

const NavLink = styled(Link)`
    padding: .5rem 0;
    color: #007bff !important;

    @media (min-width: 992px) {
        padding-right: .5rem;
        padding-left: .5rem;
    }
`;

const NavigationLink = styled(Nav.Link)`
    padding: .5rem 0;
    color: #007bff !important;
    text-decoration: none;
    background-color: transparent;

    @media (min-width: 992px) {
        padding-right: .5rem;
        padding-left: .5rem;
    }
    &:hover {
        text-decoration: underline !important;
    }
`;


function Header({ email, logoutAction, history }) {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavLink to="/">Dashboard</NavLink>
                    <NavLink to="/favorites">Favorites</NavLink>
                    {/* <Nav.Link>Favorites</Nav.Link> */}
                </Nav>
                <Nav className="mr-right">
                    <Nav.Link>{email}</Nav.Link>
                    <NavigationLink onClick={() => logoutAction(history)}>Sign Out</NavigationLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default withRouter(Header);
