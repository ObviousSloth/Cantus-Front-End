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
           {/* <Header /> */}
        </div>
        <LoginButton />
        <LogoutButton />
        <ProfilePage />
    </Container>
  );
}

export default HomePage;
