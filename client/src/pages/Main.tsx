import { Route, Routes } from 'react-router-dom';
import { Home } from '../components';

const Main = () => {
  return (
    <div className="w-full min-h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default Main;
