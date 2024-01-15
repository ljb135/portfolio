import Home from './components/home'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Projects from './components/projects';
import { useRef } from 'react';

function App() {
  const artRef = useRef(null)
  const homeRef = useRef(null)

  return (
    <div className="App">
      <section className="Snap" ref={homeRef}>
        <Home artRef={artRef}/>
      </section>
      <section className="Snap" ref={artRef}>
        <Projects homeRef={homeRef}/>
      </section>
    </div>
  );
}

export default App;
