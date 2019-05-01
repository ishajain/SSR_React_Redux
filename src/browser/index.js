import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../store';
import "materialize-css/dist/css/materialize.min.css";
import Routes from '../routes';
import { renderRoutes } from 'react-router-config';

;

ReactDOM.hydrate(
    
    <Provider store={store}>
        <BrowserRouter>
            <div>{renderRoutes(Routes)}</div>
        </BrowserRouter>
          
    </Provider>
   
    , document.getElementById("root"));

