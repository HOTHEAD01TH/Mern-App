import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from '../redux/user/userSlice';
import './signup.css'; // Custom CSS file
import 'mdb-react-ui-kit/dist/css/mdb.min.css'; // MDBootstrap CSS
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput
} from 'mdb-react-ui-kit';

export default function SignIn() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) {
        // Handle HTTP errors
        dispatch(signInFailure('Signin failed. Please try again.'));
        return;
      }

      if (data.message) {
        // Handle specific backend error messages
        if (data.message === 'User not found') {
          dispatch(signInFailure('User not found. Please check your email and try again.'));
        } else if (data.message === 'Wrong credentials') {
          dispatch(signInFailure('Incorrect email or password. Please try again.'));
        } else {
          dispatch(signInFailure(data.message || 'Signin failed. Please try again.'));
        }
        return;
      }

      dispatch(signInSuccess(data));
      navigate('/home');
    } catch (error) {
      dispatch(signInFailure('Invalid Credentials.'));
    }
  };

  return (
    <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{ 
      backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)', 
      height: '100vh',
      padding: '15px'
    }}>
      <div className='mask gradient-custom-3'></div>
      <MDBCard className='m-5 w-100' style={{ maxWidth: '600px' }}>
        <MDBCardBody className='px-3 py-4'>
          <h2 className="text-uppercase text-center mb-5">Sign In</h2>
          <form onSubmit={handleSubmit}>
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
              {loading ? 'Loading...' : 'Login'}
            </MDBBtn>
            <div className="text-center">
              <p>Dont have an account?</p>
              <Link to='/signup' className='text-blue-500'>Sign up</Link>
            </div>
            {error && <p className='text-red-700 mt-5'>{error}</p>}
          </form>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}
