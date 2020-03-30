import React from 'react';
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Test from './pages/Test'
import { Route } from 'react-router-dom'

function App() {
  return(
    <>
      <Route exact path="/" component={Home} />
      <Route exact path="/portfolio" component={Portfolio} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/test" component={Test} />
    </>

  );
}

export default App;
