import React, { useState } from 'react';
import "../Style/App.css";
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Card, CardBody } from 'react-bootstrap';
import logoKM from '../Images/KM.png';
import logoUnmul from '../Images/unmul.png';
import logoPraktikum from '../Images/ICON.png';
import TugasPertama from '../Components/Table/Tugas1';
import TugasKedua from '../Components/Table/Tugas2';
import TugasKetiga from '../Components/Table/Tugas3';
import TugasKeempat from '../Components/Table/Tugas4';
import TugasKelima from '../Components/Table/Tugas5';
import TugasKeenam from '../Components/Table/Tugas6';
import TugasKetujuh from '../Components/Table/Tugas7';
import TugasKedelapan from '../Components/Table/Tugas8';

function RecapTugas() {
  const [activeTugas, setActiveTugas] = useState('Tugas1');
  

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <Container>
        <Card>
          <CardBody>
            <Navbar className='Transparent' expand="lg">
              <Navbar.Brand href="#">
                <div className='img-group'>
                  <img src={logoKM} alt='' />
                  <img src={logoUnmul} alt='' style={{ marginLeft: '5px' }} />
                  <img src={logoPraktikum} alt='' style={{ marginLeft: '5px' }} />
                </div>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav" >
                <Nav style={{marginLeft:'auto'}}>
                  <Nav.Link as={Link} to="/kumpulinTugas" style={{ textDecoration: 'none', color: 'black' }}>Form Pengumpulan</Nav.Link>
                  <Nav.Link className={`nav-link ${activeTugas === 'Tugas1' ? 'active' : ''}`} onClick={() => setActiveTugas('Tugas1')}>Tugas 1</Nav.Link>
                  <Nav.Link className={`nav-link ${activeTugas === 'Tugas2' ? 'active' : ''}`} onClick={() => setActiveTugas('Tugas2')}>Tugas 2</Nav.Link>
                  <Nav.Link className={`nav-link ${activeTugas === 'Tugas3' ? 'active' : ''}`} onClick={() => setActiveTugas('Tugas3')}>Tugas 3</Nav.Link>
                  <Nav.Link className={`nav-link ${activeTugas === 'Tugas4' ? 'active' : ''}`} onClick={() => setActiveTugas('Tugas4')}>Tugas 4</Nav.Link>
                  <Nav.Link className={`nav-link ${activeTugas === 'Tugas5' ? 'active' : ''}`} onClick={() => setActiveTugas('Tugas5')}>Tugas 5</Nav.Link>
                  <Nav.Link className={`nav-link ${activeTugas === 'Tugas6' ? 'active' : ''}`} onClick={() => setActiveTugas('Tugas6')}>Tugas 6</Nav.Link>
                  <Nav.Link className={`nav-link ${activeTugas === 'Tugas7' ? 'active' : ''}`} onClick={() => setActiveTugas('Tugas7')}>Tugas 7</Nav.Link>
                  <Nav.Link className={`nav-link ${activeTugas === 'Tugas8' ? 'active' : ''}`} onClick={() => setActiveTugas('Tugas8')}>Tugas 8</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            <hr  />
            {/* Tampilkan konten tugas tergantung pada tugas yang aktif */}
            {activeTugas === 'Tugas1' && <div><TugasPertama/></div>}
            {activeTugas === 'Tugas2' && <div><TugasKedua/></div>}
            {activeTugas === 'Tugas3' && <div><TugasKetiga/></div>}
            {activeTugas === 'Tugas4' && <div><TugasKeempat/></div>}
            {activeTugas === 'Tugas5' && <div><TugasKelima/></div>}
            {activeTugas === 'Tugas6' && <div><TugasKeenam/></div>}
            {activeTugas === 'Tugas7' && <div><TugasKetujuh/></div>}
            {activeTugas === 'Tugas8' && <div><TugasKedelapan/></div>}
          </CardBody>
        </Card>
      </Container>
    </div>
  );
}

export default RecapTugas;
