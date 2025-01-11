import "./App.css";
import RequestsReceived from "./pages/requestsReceived";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { UserProvider } from "./contexts/userContext";
// import Navbar from './components/navbar/navbar';
import LandingPage from "./pages/landing";
import Login from "./pages/login";
import Productlist from "./pages/protected/productlist";
import RequestsReceivedPage from "./pages/requestsReceived";
import RegisterPage from "./pages/register";

const App = () => {
  return (
    <UserProvider>
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/productlist" element={<Productlist />} />
          <Route path="/requests-received" element={<RequestsReceived />} />
          <Route path="/register" element={<RegisterPage />} />
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
