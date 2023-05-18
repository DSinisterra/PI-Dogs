import './App.css';
import {Home, Landing, Create, Detail} from './views/index';
import { Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">

      <Route exact path="/">
        <Landing />
      </Route>

      <Route exact path="/home">
        <Home />
      </Route>

      <Route exact path="/home/:id">
        <Detail />
      </Route>

      <Route path="/create">
        <Create />
      </Route>

    </div>
  );
}

export default App;
