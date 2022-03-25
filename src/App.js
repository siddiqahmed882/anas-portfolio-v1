import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
function App() {
  const pathName = window.location.pathname;
  return (
    <div className='App'>
      <Navbar />
      <main
        className={
          pathName === '/projects' || pathName === '/contact' ? 'f-screen' : null
        }
      >
        <div className='container'>
          <Switch>
            <Route exact path='/' component={About} />
            <Route path='/projects' component={Projects} />
            <Route path='/contact' component={Contact} />
          </Switch>
        </div>
      </main>
    </div>
  );
}

export default App;
