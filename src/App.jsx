
import './App.css'
// import Article from './components/Article'
import Home from './pages/Index'

function App() {
  const value = true;

  return (
    <div className='App'>
      {value ? 'benar' : 'salah'}
      <Home />
    </div>
  );
}

export default App
