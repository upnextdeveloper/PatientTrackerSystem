import logo from './logo.svg';
import './App.css';
import SideBarNav from './SideBarNav/SideBarNav';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Container>
      <h1 style={{textAlign:'center'}}>Patient Tracker</h1>
      <div className="App" style={{paddingLeft:'10em'}}>
        <SideBarNav />
      </div>
    </Container>
  );
}

export default App;
