import Home from './organism/agroupItensHome/Home'
import Login from './organism/agroupItensHome/Login';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route path='/' element={<Login />}>
          </Route> */}
          <Route element={<Home />} path='/'></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
