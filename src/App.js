import Home from "./components/Home";
import GraduationPoint from "./components/GraduationPoint";
import EntrancePoint from "./components/EntrancePoint";
import About from './components/About';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <ul>
            <li><Link to='/'>Trang chủ</Link></li>
            <li><Link to = '/totnghiep'>Tính điểm tốt nghiệp</Link></li>
            <li><Link to = '/daihoc'>Tính điểm theo khối thi</Link></li>
            <li><Link to = '/about'>About</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path = '/' element = {<Home />} />
          <Route path = '/totnghiep' element = {< GraduationPoint />} />
          <Route path = '/daihoc' element = {<EntrancePoint />} />
          <Route path = '/about' element = {<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
