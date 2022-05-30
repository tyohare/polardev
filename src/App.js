import Home from './components/Home'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Routing from './components/Routing'
import Backdrop from './components/Backdrop';
import NavBar from './components/NavBar';
import Contact from './components/Contact'
import Projects from './components/Projects'
import './styles.css';


function App() {
  return (
    <div className="App">

      <Router>
      <Backdrop />
      <NavBar />

      <Routing />

        {/* <Home /> */}

      </Router>
    </div>
  );
}

export default App;
