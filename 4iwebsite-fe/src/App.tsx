import { Routes, Route } from 'react-router-dom';

import Homepage from 'components/pages/homepage';
import AboutUs from 'components/pages/aboutUs';
import ProjectManagement from 'components/pages/aboutUs/projectManagement';

function App() {
  return (
    <>
        <div className="App">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about-us" element={<AboutUs />}>
              <Route path="/about-us/project-management" element={<ProjectManagement />} />
            </Route>
          </Routes>
        </div>
    </>
  );
}

export default App;
