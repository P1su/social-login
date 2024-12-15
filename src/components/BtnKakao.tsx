import { kakaourl } from '../utils/login';

const BtnKakao = () => {
  const handleLogin = () => {
    window.location.href = kakaourl;
  };
  return(
    <button onClick={() => handleLogin()}>
      카카오로그인
    </button>
  );
};

export default BtnKakao;