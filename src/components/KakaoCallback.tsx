import axios from 'axios';
import Loading from '../pages/Loading/Loading';
import { useEffect } from 'react';
import { REST_API_KEY, KAKAO_REDIRECT_URI } from '../utils/login';
import { useNavigate } from 'react-router-dom';
const KakaoCallback = () => {
  const code = new URL(document.location.toString()).searchParams.get('code');
  console.log(code);
  
  const navigate = useNavigate();

  const postAccessCode = async () => {
    const GRANT_TYPE = 'authorization_code';
    const POST_URL = `grant_type=${GRANT_TYPE}&client_id=${REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}&code=${code}`;
    const res = await axios.post(`https://kauth.kakao.com/oauth/token?${POST_URL}`, {
      headers: {
        'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
    });

    const userData = await axios.get('https://kapi.kakao.com/v2/user/me', {
      headers: {
        Authorization: `Bearer ${res.data.access_token}`,
        'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
    });
    localStorage.setItem('nickname', userData.data.properties.nickname);
    localStorage.setItem('profile', userData.data.properties.profile_image);
    navigate('/result');
  }
  
  useEffect(() => {
    postAccessCode();
  });


  return(
    <>
      <Loading />
    </>
  );
};

export default KakaoCallback;