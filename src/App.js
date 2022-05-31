import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Categories from './pages/Categories/Categories';
import Electronics from './pages/Categories/items/electronics/electronics';

function App() {
  return (
    <div className="App">
      <Header/>
      <Categories/>
      {/* <Electronics/> */}
      <Footer/>
      
    </div>
  );
}

export default App;
