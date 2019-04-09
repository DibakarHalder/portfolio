import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Name, NavLinks } from '../Constants';

export default function NavBar() {
    const [affix, setAffix] = useState(false);
    let handleScroll = () => {
        let offset = 100;
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

        if (!affix && scrollTop >= offset) {
            setAffix(true);
        }

        if (affix && scrollTop < offset) {
            setAffix(false);
        }
    };
    window.addEventListener('scroll', handleScroll);
    return (
        <Navbar className={affix ? 'affix' : ''} expand='lg' fixed='top' id='myNav'>
            <Container>
                <Navbar.Brand href='#home'>{Name}</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav'>
                    Menu <i className='fa fa-bars' />
                </Navbar.Toggle>
                <Navbar.Collapse id='basic-navbar-nav' className='justify-content-end'>
                    <Nav>
                        {NavLinks.map((link, i) => (
                            <Nav.Link key={i} href={link.href}>
                                {link.label}
                            </Nav.Link>
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
