    import Container from 'react-bootstrap/Container';
    import Nav from 'react-bootstrap/Nav';
    import Navbar from 'react-bootstrap/Navbar';
    import NavDropdown from 'react-bootstrap/NavDropdown';
    
    function Header() {
      return (
        <Navbar expand="lg" className="bg-light">
          <Container>
            <Navbar.Brand className='fs-2' href="#home">Aula React</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className='justify-content-end' id="basic-navbar-nav">
              <Nav className="fs-5">
                <Nav.Link href="#home">Início</Nav.Link>
                <Nav.Link href="#link">Sobre</Nav.Link>
                <Nav.Link href="#link">Contato</Nav.Link>
                <NavDropdown title="Serviços" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Serviço 1</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Serviço 2</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Serviço 3</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    }
    
    export default Header;