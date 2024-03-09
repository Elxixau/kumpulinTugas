// Routes.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Form from './Components/Form';
import RecapTugas from './Page/recapTugas';


const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/kumpulinTugas" element={<Form/>}/>
        <Route path="/recapTugas" element={<RecapTugas />}/>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
