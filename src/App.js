import React, { useState } from 'react';
import './App.css'; // Your CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    phoneNo: '',
    country: '',
    city: '',
    panNo: '',
    aadharNo: ''
  });

  const [showPassword, setShowPassword] = useState(false);

  const countries = [
    { name: 'India', cities: ['Delhi', 'Mumbai', 'Bangalore'] },
    { name: 'USA', cities: ['New York', 'Los Angeles', 'Chicago'] },
    // Add more countries and cities as needed
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const { firstName, lastName, username, email, password, phoneNo, country, city, panNo, aadharNo } = formData;

    if (!firstName || !lastName || !username || !email || !password || !phoneNo || !country || !city || !panNo || !aadharNo) {
      alert('All fields are required.');
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return false;
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
    if (!passwordRegex.test(password)) {
      alert('Password must be at least 8 characters long and contain at least one uppercase letter, one number, and one special character.');
      return false;
    }

    const aadharRegex = /^\d{12}$/;
    if (!aadharRegex.test(aadharNo)) {
      alert('Aadhar number must be exactly 12 digits.');
      return false;
    }

    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phoneNo)) {
      alert('Phone number must be exactly 10 digits.');
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form Data:', formData);
      // Navigate to next.html within the same application
      window.location.href = '/next.html';
    }
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit} noValidate>
        <div className="column">
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Enter first name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Enter last name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter email address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="aadharNo">Aadhar No.:</label>
            <input
              type="text"
              id="aadharNo"
              name="aadharNo"
              placeholder="Enter Aadhar number"
              value={formData.aadharNo}
              onChange={handleChange}
              required
              pattern="\d{12}"
              title="Aadhar number must be exactly 12 digits."
            />
          </div>
        </div>
        <div className="column">
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <div style={{ position: 'relative' }}>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
                required
                pattern="^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$"
                title="Password must be at least 8 characters long and contain at least one uppercase letter, one number, and one special character."
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: 'absolute',
                  right: '-100px',
                  top: '30%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: '#000',
                  padding: 0,
                  margin: 0,
                }}
              >
                {showPassword ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
              </button>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="phoneNo">Phone No.:</label>
            <input
              type="tel"
              id="phoneNo"
              name="phoneNo"
              placeholder="Enter phone number"
              value={formData.phoneNo}
              onChange={handleChange}
              required
              pattern="\d{10}"
              title="Phone number must be exactly 10 digits."
            />
          </div>
          <div className="form-group">
            <label htmlFor="country">Country:</label>
            <select
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
            >
              <option value="">Select country</option>
              {countries.map((country) => (
                <option key={country.name} value={country.name}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="city">City:</label>
            <select
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            >
              <option value="">Select city</option>
              {formData.country && countries
                .find((country) => country.name === formData.country)
                .cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="panNo">PAN No.:</label>
            <input
              type="text"
              id="panNo"
              name="panNo"
              placeholder="Enter PAN number"
              value={formData.panNo}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
