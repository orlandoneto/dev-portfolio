import React from 'react';

import { Row, Col, Card } from 'react-materialize';

function Portfolio(props) {
    return (
        <Card>
            <Row>
                <Col s={2} m={2}>                 
                    {props.language}
                </Col>

                <Col s={10} s={10}>
                    <p><b>Projeto:</b> <span>{props.name}</span></p>
                    <p><b>Descrição:</b> <span>{props.description}</span></p>
                    <a href={props.html_url} target='_blank'>Ir para projeto</a>
                </Col>
            </Row>
        </Card>
    )
}

export default Portfolio;