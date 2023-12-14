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
    <Navbar collapseOnSelect expand="lg" className="nav bg-body-tertiary">
      <Navbar.Brand className="brand mr-auto" href="#home">
        MADE UP
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className="collapse text-center"
      >
        <Nav className="me-auto">
          {[
            { href: '#ForMe', text: 'For Me' },
            { href: '#Jeans', text: 'Jeans' },
            { href: '#Shirts', text: 'Shirts' },
            { href: '#T-Shirts', text: 'T-Shirts' },
            { href: '#Trousers', text: 'Trousers' },
            { href: '#Joggers', text: 'Joggers' },
            { href: '#Shorts', text: 'Shorts' },
          ].map((item, index) => (
            <Nav.Link key={index} href={item.href} className="mx-4">
              {item.text}
            </Nav.Link>
          ))}
        </Nav>
        <Nav>
          {[
            { icon: <BsSearch size={20} />, href: '#search' },
            { icon: <IoCartOutline size={25} />, href: '#cart' },
          ].map((item, index) => (
            <Nav.Link key={index} href={item.href} className="mx-2">
              {item.icon}
            </Nav.Link>
          ))}
        </Nav>
        <Nav>
          {[
            { icon: <CiHeart size={25} />, href: '#heart' },
            { icon: <IoPersonOutline size={20} />, href: '#profile' },
          ].map((item, index) => (
            <Nav.Link key={index} href={item.href} className="mx-2">
              {item.icon}
            </Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavbarComponent
