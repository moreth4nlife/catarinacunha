import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './assets/css/index.css';
import Navbar from './components/navigation/Navbar';
import App from './containers/home/App';
import PortfolioItem from './containers/_portfolio/PortfolioItem';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />

      <Switch>
        <Route exact path="/" >
          <App />
        </Route>
        <Route path="/portfolio/:id">
          <PortfolioItem />
        </Route>
      </Switch>

    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
