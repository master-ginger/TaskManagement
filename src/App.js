import { BrowserRouter as Router,Routes,Route,Navigate,Outlet } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Mainpage from './components/Mainpage';
import Signup from './components/Signup';
import { useState } from 'react';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const PrivateRoute = ({ isAuthenticated }) => {
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
  };
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Login setIsAuthenticated={setIsAuthenticated}/>}/>
          <Route path='/main' element={<PrivateRoute isAuthenticated={isAuthenticated}/>}>
            <Route path='/main' element={<Mainpage/>}/>
          </Route>
          <Route path="*" element={<Navigate to='/' replace/>}/>
          <Route path='/sign' element={<Signup/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
