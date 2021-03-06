import React, { useState, useEffect } from 'react';

import { Row, Col, Card } from 'react-materialize';
import axios from 'axios'
import Page from 'react-page-loading'

import UserProfile from '../user_profile/UserProfile';
import Portfolio from '../portfolio/Portfolio';

function Home() {
  const [about, setAbout] = useState([])
  const [portfolio, setPorfolio] = useState([])

  useEffect(() => {
    axios('https://api.github.com/users/orlandoneto')
      .then((result) => {
        setAbout(result.data)
        axios(result.data.repos_url)
          .then(resultPortfolio => setPorfolio(resultPortfolio.data))
          .catch(error => console.log(error))
      })
      .catch(error => console.log(error))
  }, [])

  const { bio, name, company, avatar_url } = about

  return (
    <Page loader={"bar"} color={"#A9A9A9"} size={4}>

      <Row>
        <Col m={3} s={12}>
          <UserProfile
            bio={bio}
            name={name}
            company={company}
            avatar={avatar_url} />
        </Col>
        <Col m={8} s={12}>
          <h5 className="subtitle">Sobre</h5>
          <Card>
            <div>
              <p><b>Desenvolvedor de Sistemas Web e Mobile</b></p>
              <p>Sou desenvolvedor de sistemas com mais de 12 anos de experiência,
              onde nesse tempo tive oportunidade de trabalhar em várias empresas com diversos projetos
              com diversas tecnologias e linguagens de programação.</p>
              <br />

              <p><b>Tecnologias que uso atualmente</b></p>
              <p>{bio}</p>
              <br />

              <b>Tecnologias que já trabalhei</b>
              <p>
                <span>C/C++, C# Desktop, J2ME, JSE, JEE, Python scripts, Android Java, Banco de dados Oracle</span>
              </p>
            </div>
          </Card>
          <h5 className="subtitle">Portfólio via github</h5>
          {
            portfolio.map((portfolio) => {
              return <Portfolio
                key={portfolio.id}
                name={portfolio.name}
                html_url={portfolio.html_url}
                language={portfolio.language}
                description={portfolio.description}
              />
            })
          }
        </Col>
      </Row>

    </Page>
  )
}

export default Home;