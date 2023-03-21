import './App.css';
import {Home, Landing, Create, Detail} from './views/index';
import NavBar from './components/NavBar/NavBar';
import { Route, useLocation } from 'react-router-dom';

function App() {

  const location = useLocation();

  return (
    <div className="App">

      {location.pathname !== "/" && <NavBar />}

      <Route exact path="/">
        <Landing />
      </Route>

      <Route exact path="/home">
        <Home />
      </Route>

      <Route path="/detail">
        <Detail />
      </Route>

      <Route path="/create">
        <Create />
      </Route>

    </div>
  );
}

export default App;
