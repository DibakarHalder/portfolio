import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { services } from './Constants';

function Services() {
    return (
        <section id={services.id}>
            <Container>
                <Row>
                    <Col md={12} className='text-center'>
                        <h2 className='section-heading'>{services.heading}</h2>
                        <h3 className='section-subheading text-muted'>{services.subHeading}</h3>
                    </Col>
                </Row>
                <Row className='text-center justify-content-center'>
                    {services.content.map((col) => (
                        <Col md={4} className='service-item' key={col.icon}>
                            <span className='fa-stack fa-4x'>
                                <i className='fas fa-circle fa-stack-2x text-primary' />
                                <i className={`fas ${col.icon} fa-stack-1x fa-inverse`} />
                            </span>
                            <h4 className='service-heading'>{col.heading}</h4>
                            <p className='text-muted'>{col.details}</p>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}

export default Services;
