import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import  Home  from './pages/Home';
import TodosPage from './pages/TodosPage';



function App() {
  return (
   <Routes>
    <Route path="/" element={<Layout />} >
      <Route index element={<Home />} />
      <Route path="/todolist" element={<TodosPage />} />
    </Route>

   </Routes>
  );
}

export default App;
