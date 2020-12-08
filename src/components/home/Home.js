import React from 'react';

import { Row, Col, Card } from 'react-materialize';
import company from '../../images/company.jpeg'

import UserProfile from '../user_profile/UserProfile';
import Experience from '../experience/Experience';


function Home() {
  return (
    <Row>
      <Col m={3} s={12}>
        <UserProfile />
      </Col>
      <Col m={8} s={12}>
        <h5 className="subtitle">Sobre Mim</h5>
        <Card>
          <div>
            <p><b>Lorem</b></p>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laborevoluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            <br />
            <p><b>Ipsum</b></p>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laborevoluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
          </div>
        </Card>
        <h5 className="subtitle">Experiences</h5>
        <Experience
          title="React Developer"
          company="Facebook"
          description="Descrição de teste, para depois mudar"
          avatar={company} />

        <Experience
          title="React Developer"
          company="Facebook"
          description="Descrição de teste, para depois mudar"
          avatar={company} />
      </Col>
    </Row>
  )
}

export default Home;