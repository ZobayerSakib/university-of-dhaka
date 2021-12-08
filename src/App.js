import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import DuLogin from './components/DuLogin/DuLogin';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div>
      <Router>
        <Header></Header>

        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route exact path='/duLogin'>
            <DuLogin></DuLogin>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
