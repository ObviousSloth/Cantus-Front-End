import React from 'react';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import ProfilePage from './components/Pages/ProfilePage';
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  
  const { isLoading, error } = useAuth0();
 
  return (
    <main>
      <h1>Auth0 Login</h1>
       {error && <p>Oops... {error.message}</p>}
       {!error && isLoading && <p>Loading... </p>}
       {!error && !isLoading && (
        <>
         <LoginButton />
          <LogoutButton />
          <ProfilePage />
        </>
       )}
         
        
      
    </main>
  
  );
}

export default App;


