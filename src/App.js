import logo from './logo.svg';
import './App.css';
import { Route, Router, Switch } from 'react-router';
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';
import { DemogInfo } from './pages/DemogInfo';
import { DailySymptoms } from './pages/DailySymptoms';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <Route path="/sign-in">
          <SignIn />
        </Route>
        <Route path="/sign-up">
          <SignUp />
        </Route>
        <Route path="/demopgrahic-infos">
          <DemogInfo />
        </Route>
        <Route path="/daily-symptoms">
          <DailySymptoms />
        </Route>
    </BrowserRouter>
  );
}

export default App;
