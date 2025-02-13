import { useState } from 'react';
import axios from 'axios';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/send-email`,
        formData
      );
      setResponseMessage(response.data);
    } catch (error) {
      console.error('Error:', error);
      setResponseMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div
      style={{
        maxWidth: '500px',
        margin: '50px auto',
        padding: '30px',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
      }}
    >
      <h1
        style={{
          textAlign: 'center',
          color: '#3498db', // Changed color to #3498db
          marginBottom: '20px',
          fontSize: '28px',
          fontWeight: '600',
        }}
      >
        Contact Us
      </h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '20px' }}>
          <label
            htmlFor="name"
            style={{
              display: 'block',
              marginBottom: '8px',
              color: '#3498db', // Changed color to #3498db
              fontSize: '16px',
              fontWeight: '500',
            }}
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '8px',
              border: '1px solid #ddd',
              fontSize: '16px',
              transition: 'border-color 0.3s ease',
            }}
            onFocus={(e) => (e.target.style.borderColor = '#3498db')} // Changed border color to #3498db
            onBlur={(e) => (e.target.style.borderColor = '#ddd')}
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label
            htmlFor="email"
            style={{
              display: 'block',
              marginBottom: '8px',
              color: '#3498db', // Changed color to #3498db
              fontSize: '16px',
              fontWeight: '500',
            }}
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '8px',
              border: '1px solid #ddd',
              fontSize: '16px',
              transition: 'border-color 0.3s ease',
            }}
            onFocus={(e) => (e.target.style.borderColor = '#3498db')} // Changed border color to #3498db
            onBlur={(e) => (e.target.style.borderColor = '#ddd')}
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label
            htmlFor="message"
            style={{
              display: 'block',
              marginBottom: '8px',
              color: '#3498db', // Changed color to #3498db
              fontSize: '16px',
              fontWeight: '500',
            }}
          >
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '8px',
              border: '1px solid #ddd',
              fontSize: '16px',
              minHeight: '150px',
              resize: 'vertical',
              transition: 'border-color 0.3s ease',
            }}
            onFocus={(e) => (e.target.style.borderColor = '#3498db')} // Changed border color to #3498db
            onBlur={(e) => (e.target.style.borderColor = '#ddd')}
          />
        </div>
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '14px',
            borderRadius: '8px',
            border: 'none',
            backgroundColor: '#3498db', // Changed background color to #3498db
            color: '#fff',
            fontSize: '16px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#007BFF')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#3498db')} // Changed hover background to #3498db
        >
          Submit
        </button>
      </form>
      {responseMessage && (
        <p
          style={{
            marginTop: '20px',
            color: responseMessage.includes('error') ? '#ff4d4d' : '#28a745',
            textAlign: 'center',
            fontSize: '16px',
          }}
        >
          {responseMessage}
        </p>
      )}
    </div>
  );
}

export default Contact;
