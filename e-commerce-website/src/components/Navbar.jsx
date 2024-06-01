// Packages
import React from 'react'
import { Link } from 'react-router-dom'
import { Flex, Spacer } from '@chakra-ui/react'

// Local imports 
import "../components/Navbar.css"

export default function Navbar() {
  return (
    <Flex id="navbar" p={4}>
      <Spacer />
      <Link to='/' className="nav-link">Home</Link> {/* Link to Home page*/}
      <Spacer />
      <Link to='/about' className="nav-link">About</Link> {/* Link to About page*/}
      <Spacer />
      <Link to='/Login' className="nav-link">Login</Link> {/* Link to Login page*/}
      <Spacer />
      <Link to='/Products' className="nav-link">Products</Link> {/* Link to Products page*/}
      <Spacer/>
    </Flex>
  )
}

