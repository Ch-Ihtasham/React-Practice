import { useState } from 'react'
import './App.css'

function App() {
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target; // Get name and value from the input field
    setFormValues({
      ...formValues, // Keep the previous state
      [name]: value, // Update the specific field based on the input's name attribute
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          type="text"
          name="firstName" // Name matches the key in state
          value={formValues.firstName}
          onChange={handleInputChange}
        />
      </label>
      <br />

      <label>
        Last Name:
        <input
          type="text"
          name="lastName" // Name matches the key in state
          value={formValues.lastName}
          onChange={handleInputChange}
        />
      </label>
      <br />

      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formValues.email}
          onChange={handleInputChange}
        />
      </label>
      <br />

      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formValues.password}
          onChange={handleInputChange}
        />
      </label>
      <br />

      <button type="submit">Submit</button>
    </form>

  )
}

export default App
