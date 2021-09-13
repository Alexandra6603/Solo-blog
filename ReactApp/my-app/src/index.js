import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './components/app/';
// import AppHeader from './components/app-header/app-header';
// import Searchpanel from './components/search-panel/search-panel'

ReactDOM.render(
  <React.StrictMode>
    <App/>
    {/* <AppHeader/>
    <div className="search-panel d-flex">
            <Searchpanel/>
        </div>  */}
  </React.StrictMode>,
  document.getElementById('root')
);

