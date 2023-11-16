import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import AuthProvider from './providers/AuthProvider';

import MainLayout from './layout/Layout';
import Index from './pages/index.js';
import User from './pages/setting/user';
import Login from './pages/login/login';
import POS from './pages/pos/pos.js';

function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<POS />} />
            <Route path="/pos" element={<POS />} />
            <Route path="/setting/user" element={<User />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
