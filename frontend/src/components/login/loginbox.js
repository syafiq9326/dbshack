import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Use navigate for redirection
import { useUser } from "../../contexts/userContext";
import { loginUser } from "../../services/userServices";
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
      const response = await loginUser(email, password);
      if (response.status === 200) {
        localStorage.setItem("jwt_token", response.data.jwt_token);
        login(response.data.user._id); // Call login from context
        navigate("/home"); // Navigate to the product list page
      }
    } catch (err) {
      console.error("Login failed:", err.response?.data || err.message);
      setError("Invalid email or password. Please try again."); // Display error
    }
  };

  return (
    <div className="w-full max-w-xl p-8 mx-auto space-y-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-2xl font-bold text-center">
        Login first to your account
      </h2>

      {error && (
        <div className="mb-2 text-sm text-center text-red-600">{error}</div>
      )}

      <form onSubmit={handleLogin}>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            className="block w-full p-2 mt-1 border border-gray-300 rounded-md"
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
              className="block w-full p-2 mt-1 border border-gray-300 rounded-md"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-sm leading-5"
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

      <div className="text-sm text-center">
        Don’t have an account?{" "}
        <Link to="/register" className="text-[#0d41fd] hover:underline">
          Signup
        </Link>
      </div>
    </div>
  );
};

export default LoginBox;
