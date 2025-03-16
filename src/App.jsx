
import './App.css';
import CVhome from './components/CVhome';
import FormCV from './components/FormCV';
import { useLocation,Route,BrowserRouter as Router ,Routes } from "react-router-dom";

function App() {
  return (
    <div>

       <Router>
       <Routes>
         <Route path='/' element={<FormCV/>}/>
         <Route path='/CVhome' element={<CVhome/>}/>
         </Routes>
      </Router> 
    </div>
  );
}

export default App;
