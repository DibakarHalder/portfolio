import React from 'react';
import Container from 'react-bootstrap/Container';

function Header() {
  return (
    <header>
      <Container>
        <div className='intro-text'>
          <h1 className='intro-heading'>
                        Front End
            <br />
            <b>Javascript</b> | <b>React JS</b> <br />
                        developer
          </h1>
          <a href='#services' className='page-scroll btn btn-xl'>
                        Tell Me More
          </a>
        </div>
      </Container>
    </header>
  );
}

export default Header;
