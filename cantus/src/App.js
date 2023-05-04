import React from 'react';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import ProfilePage from './components/Pages/ProfilePage';
import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/Pages/HomePage';
import MusicPage from './components/Pages/MusicPage';
import MusicLibrary from './components/Pages/MusicLibrary';
import SharedLayout from './components/SharedLayout';
import Error from './components/Pages/Error';

function App() {
  
  const { isLoading, error } = useAuth0();
 
  return (
    <div className="App">
       {error && <p>Oops... {error.message}</p>}
       {!error && isLoading && <p>Loading... </p>}
       {!error && !isLoading && (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout/>}>
        <Route index element={<HomePage />} />
        <Route path='products' element={<MusicLibrary />} />
        <Route path='products/:productId' element={<MusicPage />} />
        <Route path='*' element={<Error/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
   )}

    </div>
  
  );
}

export default App;

{/* <main>
<h1>Auth0 Login</h1>
 {error && <p>Oops... {error.message}</p>}
 {!error && isLoading && <p>Loading... </p>}
 {!error && !isLoading && (
  
   <LoginButton />
    <LogoutButton />
    <ProfilePage />
  </>
 )}
   
  

</main> */}
