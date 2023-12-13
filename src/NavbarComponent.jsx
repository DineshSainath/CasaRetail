import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './NavbarComponent.css'
import { BsSearch } from 'react-icons/bs'
import { IoCartOutline } from 'react-icons/io5'
import { CiHeart } from 'react-icons/ci'
import { IoPersonOutline } from 'react-icons/io5'
function NavbarComponent() {
  return (
    <Navbar collapseOnSelect expand="lg" className=" nav bg-body-tertiary">
      <Navbar.Brand className="brand mr-auto" href="#home">
        MADE UP
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className="collapse">
        <Nav className="me-auto">
          <Nav.Link href="#ForMe" className="mx-4">
            For Me
          </Nav.Link>
          <Nav.Link href="#Jeans" className="mx-4">
            Jeans
          </Nav.Link>
          <Nav.Link href="#Shirts" className="mx-4">
            Shirts
          </Nav.Link>
          <Nav.Link href="#T-Shirts   " className="mx-4">
            T-Shirts
          </Nav.Link>
          <Nav.Link href="#Trousers" className="mx-4">
            Trousers
          </Nav.Link>
          <Nav.Link href="#Joggers" className="mx-4">
            Joggers
          </Nav.Link>
          <Nav.Link href="#Shorts" className="mx-4">
            Shorts
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link className="mx-2 search-icon">
            <BsSearch size={20} />
          </Nav.Link>
          <Nav.Link className="mx-2 cart-icon">
            <IoCartOutline size={25} />
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link className="mx-2">
            <CiHeart size={25} />
          </Nav.Link>
          <Nav.Link className="mx-2">
            <IoPersonOutline size={20} />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavbarComponent
