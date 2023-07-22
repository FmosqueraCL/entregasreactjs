import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import productos from './Productos';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer productos={productos} />}
          />
          <Route
            path="/category/:id"
            element={<ItemListContainer productos={productos} />}
          />
          <Route
            path="/item/:id"
            element={<ItemDetailContainer productos={productos} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

