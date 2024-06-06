import React from 'react';
import { Route , Routes } from 'react-router-dom';
import ServiceList from './components/ServiceList';
import ServiceDetail from './components/ServiceDetail';

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<ServiceList />} />
        <Route path="/service/:id" element={<ServiceDetail />} />
      </Routes>
  
  );
}

export default App;
