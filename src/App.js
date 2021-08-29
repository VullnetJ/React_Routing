
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { 
  HomePage, 
  CounterButtonPage, 
  PeopleListPage, 
  NotFoundPage, 
  ProtectedPage,
  ControlledFormPage,
  UnControlledFormPage,
  UserProfilePage, } from './pages';
import { render } from '@testing-library/react';
import React, {useState} from 'react';
import './App.css';
import { Greeting } from './Greeting';
import { PeopleList } from './PeopleList';
import { CounterButton} from './CounterButton';
import {CongratulationsMessage} from './CongratulationsMessage';
import { UncontrolledForm } from './pages/UnControlledFormPage';
import { NavBar } from './NavBar';
import { FormsNavBar } from './FormsNavBar';



function App() {
  const[numberOfClicks, setNumberOfClicks] = useState(0);
  const[hideMessage, setHideMessage] = useState(false);
  const increment = () => setNumberOfClicks(numberOfClicks + 1);

  return (
    <div className="App">
    
    <Router>
        {/* <Link to="/list-pages">Go to List Pages </Link>
        <Link to="/counter-page">Go to Counter Page </Link> */}
        <NavBar />
      <div className="App-header"> 
          <Switch>
          <Route path="/" exact>
            <HomePage />         
          </Route>
          <Route path="/counter">
            <CounterButtonPage/>
          </Route>
          <Route path="/people-list">
              <PeopleListPage/>
        </Route>
        <Route path="/protected">
          <ProtectedPage />
        </Route>
        <Route path="/controlled">
          <ControlledFormPage />
        </Route>
        <Route path="/uncontrolled">
          <UnControlledFormPage />
        </Route>
        <Route path="/user">
        <UserProfilePage />
        </Route>

        <Route path="/forms">
          <Router>
            <FormsNavBar />
              <Route path="/forms/controlled">
                <ControlledFormPage />
              </Route>
              <Route path="/forms/uncontrolled">
              </Route>
          </Router>
        </Route>
        <Route>
          <NotFoundPage/>
        </Route>
      </Switch>
    </div>
    </Router>
{/* 
     { <header className="App-header">
          {hideMessage
            ? null
            : <CongratulationsMessages 
            numberOfClicks={numberOfClicks} 
            threshold = {10}
            onHide={() => setHideMessage(true)}
            />
          }
        
        <CounterButton onIncrement = {increment} numberOfClicks={numberOfClicks}/>
      </header> } */}
    </div>
  );
}

export default App;
