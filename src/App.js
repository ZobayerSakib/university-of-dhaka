import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import DuLogin from './components/DuLogin/DuLogin';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import StudentLogin from './components/StudentLogin/StudentLogin';
import useAuth from './Hooks/useAuth';
function App() {
  return (
    <div>
      <useAuth>
        <Router>
          <Header></Header>

          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>

            <Route exact path='/duLogin'>
              <DuLogin></DuLogin>
            </Route>

            <Route exact path='/studentLogin'>
              <StudentLogin></StudentLogin>
            </Route>
          </Switch>
        </Router>
      </useAuth>
    </div>
  );
}

export default App;
