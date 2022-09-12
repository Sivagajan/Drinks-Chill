import './App.css';
import Header from './components/header/Header.jsx'
import Footer from './components/footer/Footer.jsx'
import AddCocktails from './pages/addCocktails/AddCocktails';

function App() {
  return (
    <div className="App">
      < Header />
      <AddCocktails />
      <Footer />
    </div>
  );
}

export default App;