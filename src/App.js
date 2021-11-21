import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from './pages/HomePage';
import ReporitoryListPage from './pages/ReporitoryListPage';
import RepositoryDetailspage from './pages/RepositoryDetailspage';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';


function App() {
 
  return (
    <Router>
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/repository/:username/:repo" element={<RepositoryDetailspage/>}/>
        <Route path="/repositories/:username" element={<ReporitoryListPage/>}/>
        <Route path="/about" element={<About/>}/>

        <Route path="/" element={<HomePage/>}/>

      </Routes>
        <Footer/>
    </div>
    </Router>
  );
}

export default App;
