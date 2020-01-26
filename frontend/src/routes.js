import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Restaurant from './pages/restaurant';
import MarmitasAnteriores from './pages/marmitasPassadas';
import Home from './pages/home';

export default function routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/restaurante" component={Restaurant}></Route>
        <Route path="/marmitasanteriores" component={MarmitasAnteriores}></Route>
      </Switch>
    </BrowserRouter>
  );
}
