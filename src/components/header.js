import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import img1 from '../img/img1.jpg'
import { Link } from 'react-router-dom';

function Header(){
    return(
            <Navbar expand="lg" className="headernav">
            <Container fluid>
            <Navbar.Brand ><Link to={"/"}><img  src={img1} className='logo' /></Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll"  className='toggle'/>
            <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll>
                </Nav>
                <Form className=" formhead">
                
                <Nav.Link href="#alldata" className='headerlink'><Link to={'/'} className='headerlinkl'>Home</Link></Nav.Link>
                <Nav.Link   className='headerlink'><Link to='/men' className='headerlinkl'> Men's clothing</Link></Nav.Link>
                <Nav.Link href="#action2"  className='headerlink'><Link to={'/women'} className='headerlinkl'>Women's clothing</Link></Nav.Link>
                <Nav.Link href="#action2"  className='headerlink'><Link to={'/Jewelery'} className='headerlinkl'>Jewelery</Link></Nav.Link>
                <Nav.Link href="#action1 "  className='headerlink'><Link to={'/Electronics'} className='headerlinkl'>Electronics</Link></Nav.Link>
                <Nav.Link href="#action2"  className='headerlink1'><Link to={'/sigin'} className='headerlinkl'>Login</Link></Nav.Link>
                <Nav.Link href="#action2"  className='headerlink2'><Link to={'/'} className='headerlinkl'>Cart</Link></Nav.Link>
                </Form>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default Header