import React from 'react';
import Navbar from './components/navbar';
import ItemListContainer from './components/ItemListcontainer';
import 'materialize-css/dist/css/materialize.min.css';


function App() {
  return (
    <div>
      <Navbar/>
      <ItemListContainer greeting="Moe-Shop Store" />
    </div>
  );
}

export default App;
