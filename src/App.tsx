import React from 'react';
import NavBar from './components/NavBar';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Tasks from './pages/Tasks';
import About from './pages/About';

const App: React.FC = () => {

  return (
    <BrowserRouter>
      <NavBar />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Tasks}/>
          <Route path="/about" component={About}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;