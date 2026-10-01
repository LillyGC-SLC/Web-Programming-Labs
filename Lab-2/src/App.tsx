import './App.css';
import listings from './data/data';
import ResortContainer from './Components/ResortContainer.tsx';
function App() {
  return (
    <>
      <h1 id="header">Resorts Lite</h1>
      <ResortContainer listings={listings}/>
    </>
  );
}

export default App
