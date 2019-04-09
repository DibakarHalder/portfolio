import React from 'react';
import Container from 'react-bootstrap/Container';
import { MainHeading } from './Constants';

function Header() {
    return (
        <header>
            <Container>
                <div className='intro-text'>
                    <h1 className='intro-heading'>
                        {MainHeading.expertise}
                        <br />
                        <b>{MainHeading.firstLevelSkill}</b> | <b>{MainHeading.secondLevelSkill}</b> <br />
                        {MainHeading.designation}
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
