import { Route, Routes } from 'react-router-dom';
import { Footer, Home, Overview } from '../components';

const Main = () => {
  return (
    <div className="w-full min-h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/overview/*" element={<Overview />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Main;
