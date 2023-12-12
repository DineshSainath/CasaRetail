import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import 'bootstrap/dist/css/bootstrap.min.css'
import './NavbarComponent.css'
function NavbarComponent() {
  return (
    <Navbar collapseOnSelect expand="lg" className=" nav bg-body-tertiary">
      <Navbar.Brand className="brand mr-auto" href="#home">
        MADE UP
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
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
          <Nav.Link eventKey={2} href="#memes">
            Dank memes
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavbarComponent
