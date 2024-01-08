import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Outlet } from 'react-router-dom';
import { sessionSelector } from '@/storage/slices/session/selector';
import { sessionActions } from '@/storage/slices/session';
import { BASE_URL } from '@/config/constants';

function App() {
  const { user } = useSelector(sessionSelector);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const checkUser = async () => {
      try {
        const response = await fetch(`${BASE_URL}session`);
        if (response.ok) {
          dispatch(sessionActions.updateUser(await response.json()));
        } else {
          navigate('/login');
        }
      } catch (error) { console.error(error) }
    };
    checkUser();
  }, [user, dispatch, navigate]);

  return user ? (
   <div><Outlet /></div>
  ) : null
}

export default App;
