import Home from './components/home'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Projects from './components/projects';

function App() {
  return (
    <div className="App">
      <section className="Snap">
        <Home/>
      </section>
      <section className="Snap">
        <Projects/>
      </section>
    </div>
  );
}

export default App;
