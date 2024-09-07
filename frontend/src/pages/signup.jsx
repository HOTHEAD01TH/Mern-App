import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './signup.css'; // Custom CSS file
import 'mdb-react-ui-kit/dist/css/mdb.min.css'; // MDBootstrap CSS
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput
} from 'mdb-react-ui-kit';

export default function SignUp() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError('');
      
      const res = await fetch('http://localhost:3000/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        setError('Signup failed. Please try again.');
        setLoading(false);
        return;
      }

      const data = await res.json();
      console.log('Response data:', data);

      setLoading(false);

      if (data.success === false) {
        setError(data.message || 'Signup failed. Please try again.');
        return;
      }

      navigate('/signin');
    } catch (error) {
      console.error('Error during signup:', error);
      setError('Something went wrong! Please try again later.');
      setLoading(false);
    }
  };

  return (
    <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{ 
      backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)', 
      height: '100vh',
      padding: '15px' // Add padding for better mobile view
    }}>
      <div className='mask gradient-custom-3'></div>
      <MDBCard className='m-5 w-100' style={{ maxWidth: '600px' }}>
        <MDBCardBody className='px-3 py-4'>
          <h2 className="text-uppercase text-center mb-5">Create an account</h2>
          <form onSubmit={handleSubmit}>
            <MDBInput 
              wrapperClass='mb-4' 
              label='Your Name' 
              size='lg' 
              id='username' 
              type='text' 
              onChange={handleChange} 
              required
            />
            <MDBInput 
              wrapperClass='mb-4' 
              label='Your Email' 
              size='lg' 
              id='email' 
              type='email' 
              onChange={handleChange} 
              required
            />
            <MDBInput 
              wrapperClass='mb-4' 
              label='Password' 
              size='lg' 
              id='password' 
              type='password' 
              onChange={handleChange} 
              required
            />
            <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg' type='submit' disabled={loading}>
              {loading ? 'Loading...' : 'Register'}
            </MDBBtn>
            <div className="text-center">
              <p>Already have an account?</p>
              <Link to='/signin' className='text-blue-500'>Sign in</Link>
            </div>
            {error && <p className='text-red-700 mt-5'>{error}</p>}
          </form>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}
