import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

type Props = {}

const Header = (props: Props) => {
  return (
    <Navbar className="p-2" bg="dark" variant="dark">
    <Navbar.Brand href="#">Contact List</Navbar.Brand>
    <Nav className="me-auto">
    <Nav className='m-2' ><Link to='/' >Home</Link></Nav>
    <Nav  className='m-2'><Link to='/OtherPage' >Other Page</Link></Nav>
    </Nav>
    </Navbar>
  )
}

export default Header;