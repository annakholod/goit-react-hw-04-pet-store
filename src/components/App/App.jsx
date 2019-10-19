import React from 'react';
import './App.module.css';
import { Switch, Route } from 'react-router-dom';
import Header from '../Header/Header';
import HomePage from '../../pages/HomePage/HomePage';
import PetsPage from '../../pages/PetsPage/PetsPage';
import AboutPage from '../../pages/AboutPage/AboutPage';
import PetPage from '../../pages/PetPage/PetPage';

const App = () => (
  <div>
    <Header />
    <Switch>
      <Route component={HomePage} path="/" exact />
      <Route component={PetPage} path="/pets/:id" />
      <Route component={PetsPage} path="/pets" />
      <Route component={AboutPage} path="/about" />
      <Route component={HomePage} />
    </Switch>
  </div>
);

export default App;
