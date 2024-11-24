import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Signup.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
  });

  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const response = await fetch("http://localhost:5000/api/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage("Signup successful!");
      } else {
        setMessage(`Error: ${result.message}`);
      }
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };

  return (
    <div id="signup-container">
      <h2>Signup</h2>
      <form id="signup-form" onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="button" onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? "Hide" : "Show"} Password
        </button>
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />
        <button type="submit" id="signup-button">
          Sign Up
        </button>
      </form>
      {message && <div id="signup-message">{message}</div>}
      <div id="login-link">
        Already have an account? <Link to="/login">Log in here</Link>
      </div>
    </div>
  );
};

export default Signup;




// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // Import 'useNavigate'
// import { Link } from 'react-router-dom'; // Add 'Link' import
// import '../styles/Signup.css';

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: '',
//     phoneNumber: '',
//   });

//   const [message, setMessage] = useState('');
//   const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
//   const navigate = useNavigate(); // Initialize the navigate function

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage(''); // Clear previous messages

//     try {
//       const response = await fetch('YOUR_SERVER_API_ENDPOINT/signup', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       const result = await response.json();

//       if (response.ok) {
//         setMessage('Signup successful!');
//         localStorage.setItem('authToken', result.token);
//         navigate('/bodypage');
//       } else {
//         setMessage(`Error: ${result.message}`);
//       }
//     } catch (error) {
//       setMessage(`Error: ${error.message}`);
//     }
//   };

//   return (
//     <div id="signup-container">
//       <h2>Signup</h2>
//       <form id="signup-form" onSubmit={handleSubmit}>
//         <label htmlFor="firstName">First Name:</label>
//         <input
//           type="text"
//           id="firstName"
//           name="firstName"
//           value={formData.firstName}
//           onChange={handleChange}
//           required
//         />
//         <label htmlFor="lastName">Last Name:</label>
//         <input
//           type="text"
//           id="lastName"
//           name="lastName"
//           value={formData.lastName}
//           onChange={handleChange}
//           required
//         />
//         <label htmlFor="email">Email:</label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />
//         <label htmlFor="password">Password:</label>
//         <input
//           type={showPassword ? 'text' : 'password'}
//           id="password"
//           name="password"
//           value={formData.password}
//           onChange={handleChange}
//           required
//         />
//         <button type="button" onClick={() => setShowPassword(!showPassword)}>
//           {showPassword ? 'Hide' : 'Show'} Password
//         </button>
//         <label htmlFor="phoneNumber">Phone Number:</label>
//         <input
//           type="tel"
//           id="phoneNumber"
//           name="phoneNumber"
//           value={formData.phoneNumber}
//           onChange={handleChange}
//           required
//         />
//         <button type="submit" id="signup-button">Sign Up</button>
//       </form>
//       {message && <div id="signup-message">{message}</div>}
//       <div id="login-link">
//         Already have an account? <Link to="/login">Log in here</Link>
//       </div>
//     </div>
//   );
// };

// export default Signup;
