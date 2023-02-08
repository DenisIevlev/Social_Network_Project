import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {addPost} from './redux/state';
import './index.css';


const rerenderEntireTree = (state) => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
  <React.StrictMode>
  <App state={state} addPost={addPost} />
</React.StrictMode>
  )
};

export default rerenderEntireTree;