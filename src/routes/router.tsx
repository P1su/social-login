import { createBrowserRouter } from 'react-router-dom';
import Main from '../pages/Main/Main';
import KakaoCallback from '../components/KakaoCallback';
import GoogleCallback from '../components/GoogleCallback';
import Result from '../pages/Result/Result';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/auth/kakao',
    element: <KakaoCallback />,
  },
  {
    path: '/auth/google',
    element: <GoogleCallback />,
  },
  {
    path: '/result',
    element: <Result />,
  },
]);

export default router;