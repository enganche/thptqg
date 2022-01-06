import Home from "./components/Home";
import GraduationPoint from "./components/GraduationPoint";
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
            <li>Tính điểm theo khối thi</li>
            <li>About</li>
          </ul>
        </nav>
        <Routes>
          <Route path = '/' element = {<Home />} />
          <Route path = '/totnghiep' element = {< GraduationPoint />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
