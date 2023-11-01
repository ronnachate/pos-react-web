import { Navigate, Outlet, useLocation } from 'react-router-dom';
import NavBar from '../components/Navbar';
import useAuth from '../hooks/useAuth';

function MainLayout() {
  const auth = useAuth();
  const { pathname } = useLocation();
  if (auth.isAuth()) {
    return (
      <>
        <NavBar />
        <Outlet />
      </>
    );
  }
  return (
    <Navigate to={`/login?redirect=${encodeURIComponent(pathname)}`} replace />
  );
}
export default MainLayout;
