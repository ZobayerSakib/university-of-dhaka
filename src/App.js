import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import DuLogin from './components/DuLogin/DuLogin';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import StudentLogin from './components/StudentLogin/StudentLogin';
import AuthProvider from './context/AuthProvider';
import StudentRegister from './components/StudentResgister/StudentRegister';
import NotFound from './components/NotFound/NotFound';
import Dashboard from './components/Dashboard/Dashboard';
import LatestNewsPost from './components/LatestNewsPost/LatestNewsPost';
import MakeAdmin from './components/MakeAdmin/MakeAdmin';

function App() {
  return (
    <div>

      <AuthProvider>
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
            <Route exact path='/studentRegister'>
              <StudentRegister></StudentRegister>
            </Route>

            <Route exact path='/dashboard'>
              <Dashboard></Dashboard>
            </Route>
            <Route exact path='/latestNewsPost'>
              <LatestNewsPost></LatestNewsPost>
            </Route>
            <Route exact path='/makeAdmin'>
              <MakeAdmin></MakeAdmin>
            </Route>

            <Route exact path='*'>
              <NotFound></NotFound>
            </Route>

          </Switch>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
