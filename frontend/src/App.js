import logo from './logo.svg';
import './App.css';
import RequestsReceived from './pages/requestsReceived';
import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./contexts/userContext";
// import Navbar from './components/navbar/navbar';
import Login from "./pages/login";
import Productlist from "./pages/protected/productlist";
import RequestsReceivedPage from "./pages/requestsReceived";
import LandingPage from "./pages/landing";

const App = () => {
  return (
    <UserProvider>
      <Router>
          {/* <Navbar /> */}
          <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/productlist" element={<Productlist />} />
              <Route path="/requests-received" element={<RequestsReceived />} />
          </Routes>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/requests-received" element={<RequestsReceivedPage />} />
          <Route path="/home" element={<LandingPage />} />

          <Route path="/" element={<Login />} />
          <Route path="/productlist" element={<Productlist />} />
        </Routes>
      </Router>
    </UserProvider>
  );
};

export default App;
