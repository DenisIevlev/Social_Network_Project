import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const messagesNameInfo = [{ id: 1, name: 'Roman' }, { id: 2, name: 'Svetlana' },
{ id: 3, name: 'Arthur' }, { id: 4, name: 'Dmitry' },
{ id: 5, name: 'Victoria' }];

const messagesInfo = [{id: 1, message:'Hello, how are you?'}, {id: 2, message:'Do you want to take a walk?'},
{id: 3, message:'Where is my key, did you know?'}, {id: 4, message:'See how it\'s cheap!'},
{id: 5, message:'Going for a lunch, you with me?'}];

const myPosts = [{message: 'Hi, how are you?', likeCount: 0, }, {message: 'It\'s my first post', likeCount: 5,}];


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App messagesNameInfo={messagesNameInfo} messagesInfo={messagesInfo} myPosts={myPosts} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
