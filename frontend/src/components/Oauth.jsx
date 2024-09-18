import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import { app } from '../firebase'; // Ensure this path is correct for your project
import { useDispatch } from 'react-redux';
import { signInSuccess } from '../redux/user/userSlice';
import { useNavigate } from 'react-router-dom';
import { MDBBtn } from 'mdb-react-ui-kit';
import { useState } from 'react';

export default function GoogleOAuthButton() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleGoogleClick = async () => {
    try {
      setLoading(true);
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      const result = await signInWithPopup(auth, provider);

      const res = await fetch('/api/auth/google', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error('Failed to authenticate with Google');
      }

      dispatch(signInSuccess(data));
      navigate('/');
    } catch (error) {
      console.log('Could not log in with Google', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <MDBBtn 
      className='mb-4 w-100 gradient-custom-4' 
      size='lg' 
      type='button' 
      onClick={handleGoogleClick}
      disabled={loading}
    >
      {loading ? 'Loading...' : 'Continue with Google'}
    </MDBBtn>
  );
}
