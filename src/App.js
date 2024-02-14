import Header from "./Components/Header";
import Footer from "./Components/Footer";
import {Container} from 'react-bootstrap';
import HomeScreen from "./Components/Screens/HomeScreen";
import {Outlet} from 'react-router-dom';

function App() {
  return (
  <>
    <Header />

    <Container>
      <main>
       <Outlet/>
      </main>
    </Container>
    
    <Footer/>
  </>
  );
}

export default App;
