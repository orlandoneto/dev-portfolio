import React from 'react';
import ReactWhatsapp from 'react-whatsapp';

import whatsapp from '../../images/whatsapp.png'

import { Row, Col, Card } from 'react-materialize';

function Contact() {
    const cssButton = {
        background: 'none',
        border: 'none'

    }

    const cssImg = {
        width: '20px',
        height: '20px',
    }

    return (
        <Row>
            <Col m={3} s={12} />
            <Col m={8} s={12}>
                <h5>Contatos</h5>
                <Card>
                    <Row>
                        <Col s={12} m={12}>
                            <ul>
                                <li><b>Email:</b> orlandoneto23@gmail.com</li>
                                <li><b>Whatsapp:</b> 85 9 8774-7221</li>
                                <li><b>Conversar via:</b>
                                    <ReactWhatsapp
                                        style={cssButton}
                                        number="85-98774-7221" message="Olá José Orlando, venho por meio do seu portfólio.">
                                        <img src={whatsapp} style={cssImg} alt="Whatsapp" />
                                    </ReactWhatsapp></li>
                            </ul>
                        </Col>
                    </Row>
                </Card>
            </Col>
        </Row>
    )
}

export default Contact;