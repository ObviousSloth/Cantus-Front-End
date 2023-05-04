import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Header from '../Header';
import LoginButton from '../LoginButton';
import LogoutButton from '../LogoutButton';
import ProfilePage from './ProfilePage'

function HomePage() {
  return (
    <Container>
         <div>
            <Header />
        </div>
        <LoginButton />
    <LogoutButton />
    <ProfilePage />
      <Row className="justify-content-center mt-5">
        <Col md={8} className="text-center">
          <h1>Welcome to Cantus</h1>
          <p className="lead">The music streaming platform you'll love.</p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-center">
            <Link to="/music" className="btn btn-primary btn-lg me-md-3">
              Start Listening
            </Link>
            <Link to="/profile" className="btn btn-secondary btn-lg">
              Profile
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;
