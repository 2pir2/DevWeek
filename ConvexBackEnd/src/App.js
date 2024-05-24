import logo from './logo.svg';
import './App.css';
import SearchBar from './searchbar';
import SearchBar2 from './searchbar2';

function App() {
  return (
    <div className="App"
    >
      <header className="App-header">
        <h1>Welcome to the Flyer Generation Website</h1>
        <div style={{ marginBottom: '20px' }}>
          <SearchBar />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <SearchBar2 />
          </div>
      </header>
    </div>
  );
}


export default App;
