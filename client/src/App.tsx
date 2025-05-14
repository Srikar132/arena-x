import { Route, Routes } from 'react-router-dom';
import AdminDashboard from './pages/AdminDashboard';
import Main from './pages/Main';

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Main />} path="/*" />
        <Route element={<AdminDashboard />} path="dashboard/*" />
      </Routes>
    </>
  );
};
export default App;
