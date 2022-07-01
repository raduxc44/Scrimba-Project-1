//import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';

function App() {
  return (
    
    <div className='page'>
      <style>
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Open+Sans&display=swap');
      </style>
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
