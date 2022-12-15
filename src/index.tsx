import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CrudApp from './Components/CrudApp';
import Header from './Views/Header';
import Footer from './Views/Footer';
<script src="../path/to/flowbite/dist/flowbite.js"></script>



ReactDOM.render(
  
  <React.StrictMode>
    <Header/>
    <CrudApp/>
    <App />
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);
