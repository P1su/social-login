import Loading from '../pages/Loading/Loading'
import { useEffect } from 'react';
import { GOOGLE_CLIENT_ID, GOOGLE_REDIRECT_URI, GOOGLE_CLIENT_SECRET } from '../utils/login';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const GoogleCallback = () => {
  const code = new URL(document.location.toString()).searchParams.get('code');
  console.log(code);

  const navigate = useNavigate();
  const postAccessCode = async () => {
    const GRANT_TYPE = 'authorization_code';
    const POST_URL = `code=${code}&client_id=${GOOGLE_CLIENT_ID}&client_secret=${GOOGLE_CLIENT_SECRET}&redirect_uri=${GOOGLE_REDIRECT_URI}&grant_type=${GRANT_TYPE}`;
    const res = await axios.post(`https://oauth2.googleapis.com/token?${POST_URL}`, {
      headers: {
        'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
    });
    
    const userData = await axios.get(`https://www.googleapis.com/userinfo/v2/me`, {
      headers: {
        Authorization: `Bearer ${res.data.access_token}`,
        'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
    })
    localStorage.setItem('nickname', userData.data.name);
    localStorage.setItem('profile', userData.data.picture);
    navigate('/result');
  }
  
  useEffect(() => {
    postAccessCode();
  });

  return(
    <Loading />
  );
};

export default GoogleCallback;