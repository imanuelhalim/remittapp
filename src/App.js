import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/SideBar/NavBar';
import Home from './components/Pages/Home';
import MyAttedance from './components/Pages/MyAttendance';
import MyProfile from './components/Pages/MyProfile';
import WorkHistory from './components/Pages/WorkHistory';

const App = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/my-attendance' component={MyAttedance}/>
          <Route path='/my-profile' component={MyProfile}/>
          <Route path='/work-history' component={WorkHistory}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
