import { Routes, Route  } from 'react-router-dom';
import { LoginPage } from '@/pages';
import App from './App';

export const Navigation = () => {
  return (
    <Routes>
      <Route path='/login' element={<LoginPage />} />
      <Route path='/' element={<App />} />
    </Routes>
  )
};
