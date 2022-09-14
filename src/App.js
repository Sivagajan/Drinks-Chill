import './App.css';
import Header from './components/header/Header.jsx'
import Footer from './components/footer/Footer.jsx'
import Home from './pages/home/Home'
import Contact from './pages/contact/Contact';


function App() {
  return (
    <div className="App">
      < Header />
      < Home />
      <Footer />
    </div >
  );
}
export default App;