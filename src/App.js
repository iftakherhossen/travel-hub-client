import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import AuthProvider from "./context/AuthProvider/AuthProvider";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;