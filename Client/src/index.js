import React from 'react'
//import ReactDOM from 'react-dom'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter} from "react-router-dom";

import store from './redux/store';
import {Provider} from 'react-redux';

const rootElement=document.getElementById('root');
const root=createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App/> 
      </BrowserRouter>
  </Provider>
    
  </React.StrictMode>
 
)
/*ReactDOM.render(
  <App />,
  document.getElementById('root')
)
*/