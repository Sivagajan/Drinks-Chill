import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CocktailList from './pages/cocktailList/CocktailList';
import Popupwindow from './components/popupwindow/Popupwindow';
import AddCocktails from './pages/addCocktails/AddCocktails';
<<<<<<< HEAD
=======
import About from './pages/about/About'
import Contact from './pages/contact/Contact';
>>>>>>> 938c839a655fcfe36656ce08380f38fff1e0b94c
import Recipe from './components/recipe/Recipe'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={< App />} />
        <Route path='/cocktailList/:drink' element={< CocktailList />} />
        <Route path='/addCocktails' element={< AddCocktails />} />
<<<<<<< HEAD
        <Route path='/recipe' element={< Recipe />} />

=======
        <Route path='/about' element={< About />} />
        <Route path='/contact' element={< Contact />} />
        <Route path='/recipe' element={< Recipe />} />
        <Route path='/popupwindow' element={< Popupwindow />} />
>>>>>>> 938c839a655fcfe36656ce08380f38fff1e0b94c
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
