import { googleurl } from '../utils/login';

const BtnGoogle = () => {
  const handleLogin = () => {
    window.location.href = googleurl;
  };
  return(
    <button onClick={() => handleLogin()}>
      구글로그인
    </button>
  );
};

export default BtnGoogle;