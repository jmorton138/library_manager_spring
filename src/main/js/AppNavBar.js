const React = require('react');
const ReactDOM = require('react-dom');
import {Navbar, NavbarBrand, NavLink, NavItem, Nav} from 'reactstrap';

export default function AppNavbar() {
    return (
        <Navbar color="dark" dark expand="md" >
            <Nav>
                <NavItem>
                    <NavLink href="/read">Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/create">Add Book</NavLink>
                </NavItem>
            </Nav>
        </Navbar>
        )
}