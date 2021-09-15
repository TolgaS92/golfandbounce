import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;