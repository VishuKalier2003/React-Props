import './App.css';
// { App component } present in components folder
// Retrieving the required component by the folder identity
import { Greet } from './components/Greet';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Greet name='Vishu Kalier'/>
        </header>
    </div>
  );
}

export default App;
