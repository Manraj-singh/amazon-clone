import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import  reducer,{ initialState } from "./Reducer";
import { Stateprovider } from './StateProvider';


ReactDOM.render(
  <React.StrictMode>

    <Stateprovider initialState={initialState} reducer={reducer}>
      <App />
    </Stateprovider>
      
   
  </React.StrictMode>,
  document.getElementById('root')
);