import React from 'react';
import 'styles/index.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'store/store';
import Home from 'pages/Home';
import About from 'pages/About';
import Maps from 'pages/Maps';
import Maps2 from 'pages/Maps2';
import Counter from 'pages/Counter';
import Pokemon from 'pages/Pokemon';
import Todo from 'pages/Todo';
import NotFound from 'pages/NotFound';

const App = () => {
  return (
    <Router>
      <Provider store={ store }>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/maps'>
            <Maps />
          </Route>
          <Route path='/maps2'>
            <Maps2 />
          </Route>
          <Route path='/counter'>
            <Counter />
          </Route>
          <Route path='/pokemon'>
            <Pokemon />
          </Route>
          <Route path='/todo'>
            <Todo />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Provider>
    </Router>
  );
};

export default App;