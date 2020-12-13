import logo from './logo.svg';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import './App.css';

import HomePage from "./page/HomePage/HomePage";
import ProfilePage from "./page/ProfilePage/ProfilePage";
import ProductionPage from "./page/ProductionPage/ProductionPage";
import ScoringPage from "./page/ScoringPage/ScoringPage";
import ContactPage from "./page/ContactPage/ContactPage";

import HeaderNav from "./Component/Header/HeaderNav";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/profile" component={ProfilePage} />
        <Route exact path="/production" component={ProductionPage} />
        <Route exact path="/Scoring" component={ScoringPage} />
        <Route exact path="/Contact" component={ContactPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
