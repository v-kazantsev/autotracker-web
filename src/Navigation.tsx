import { Routes, Route  } from 'react-router-dom';
import App from './App';

export const Navigation = () => {
  return (
    <Routes>
      <Route path='/' element={<App />} />
    </Routes>
  )
};
