import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbarcomponent';
import FuncComp from './components/FunctionalComponents';
import ClassComp from './components/ClassComponents';
import { Route,Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
      <Route path="funcom" element={<FuncComp/>}></Route>
      <Route path="classcom" element={<ClassComp/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
