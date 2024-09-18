import logo from './logo.svg';
import './App.css';
import SideBarNav from './SideBarNav/SideBarNav';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Container>
      <div className="App">
      <h1>Patient Tracker</h1>
      <SideBarNav/>
    </div>
    </Container>
  );
}

export default App;
