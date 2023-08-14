import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Create from './Views/Create/Create.components';
import Detail from './Views/Details/Detail.components';
import Home from './Views/Home/Home.components';
import Landing from './Components/Landing/Landing.component'
import Form from './Views/Form/Form.components'
import './App.css';
import './App.models.css'



function App() {
return (
  <div className={`${App} App`}>
    <Router>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/form" element={<Form/>} />
        <Route path="/home/:id" element={<Detail />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </Router>
  </div>
);
}

export default App;