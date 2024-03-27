import React, { Component } from 'react'
import Navbar from'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

export default class MyNavbar extends Component {
  render() {
    return (
      <div className='container'>
        <Navbar className='justify-content-end'>
          <Nav>
            <Nav.Link href='#'>Home</Nav.Link>
            <Nav.Link href='#'>Menu</Nav.Link>
            <Nav.Link href='#'>About</Nav.Link>
          </Nav>
        </Navbar>
      </div>
    )
  }
}
