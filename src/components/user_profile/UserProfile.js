import React from 'react';

import { Row, Col, Card } from 'react-materialize';

function UserProfile(props) {
    console.log(props)
    return (
        <Card>
            <Row>
                <Col s={8} m={8} offset="s2 m2">
                    <img src={props.avatar} className="circle responsive-img" />
                </Col>
            </Row>
            <Row className="center-align">
                <h5 >{props.name}</h5>
                <p className="grey darken-2 white-text">Atualmente em {props.company}</p>
            </Row>
        </Card>
    )
}

export default UserProfile;