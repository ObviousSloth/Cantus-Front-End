import { Outlet } from 'react-router-dom';
import StyledNavbar from './StylesNavbar';
const Home = () => {
  return (
  <>
    
    <StyledNavbar/>
    <Outlet/> 

  </>
  );
};
export default Home;
