import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Use navigate for redirection
import axios from "axios"; // To make API calls
import { useUser } from "../../contexts/userContext";

const LoginBox = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [error, setError] = useState(null); // State for login errors
  const navigate = useNavigate(); // For navigation

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const { login } = useUser(); // Use the login function from context
  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent form submission refresh
    setError(null); // Clear any previous errors

    try {
      const response = await axios.post("http://localhost:3001/users/login", {
        email,
        password,
      });

      if (response.status === 200) {
        login(response.data.user._id); // Call login from context
        navigate("/productlist"); // Navigate to the product list page
      }
    } catch (err) {
      console.error("Login failed:", err.response?.data || err.message);
      setError("Invalid email or password. Please try again."); // Display error
    }
  };


  return (
    <div className="w-full max-w-xl mx-auto bg-white p-8 rounded-xl shadow-lg space-y-6">
      <h2 className="text-2xl font-bold text-center">
        Login first to your account
      </h2>

      {error && (
        <div className="text-red-600 text-center text-sm mb-2">{error}</div>
      )}

      <form onSubmit={handleLogin}>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"} // Toggle between text and password
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        <div className="text-right">
          <Link
            to="/passwordreset"
            className="text-sm text-[#0d41fd] hover:underline"
          >
            Forgot password?
          </Link>
        </div>

        <div className="flex justify-center space-x-4">
          <button
            type="submit"
            className="w-full max-w-xs bg-[#0E216E] text-white py-2 rounded-md"
          >
            Login
          </button>
        </div>
      </form>

      <div className="text-center text-sm">
        Don’t have an account?{" "}
        <Link to="/register" className="text-[#0d41fd] hover:underline">
          Signup
        </Link>
      </div>
    </div>
  );
};

export default LoginBox;
