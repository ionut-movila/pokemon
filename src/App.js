import './App.css';
import { Route, Switch } from 'react-router-dom';
import PokeList from './views/PokeList';
import PokeDetails from './views/PokeDetails';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/">
          <PokeList/>
        </Route>
        <Route path="/list">
          <PokeList/>
        </Route>
        <Route path="/details/:id">
          <PokeDetails/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
