'use client'
import { Container, Row, Col } from 'react-bootstrap';
import Tabela from '../Tabela/page';
import BarraLateral from '../BarraLateral/page';
import Header from '../Header/page';

function Dashboard() {
  return (
    <Container fluid>
      <Row>
        <Col sm={2} >
          <BarraLateral />
        </Col>
        <Col sm={10} className='px-10'>
          <Header />
          <Container>
            <Row className="my-4">
              <Col>
              </Col>
            </Row>
            <Row className="my-4">
              <Col>
                <Tabela />
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
