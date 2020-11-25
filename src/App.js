import './App.scss';
import { Route, Switch } from 'react-router-dom';
import PokeList from './views/PokeList';
import PokeDetails from './views/PokeDetails';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/list">
          <PokeList/>
        </Route>
        <Route path="/details/:id">
          <PokeDetails/>
        </Route>
        <Route path="/">
          <PokeList/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
