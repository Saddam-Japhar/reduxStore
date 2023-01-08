import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import App from './component/App'
import Reducer from './Reducers';
import { createStore, applyMiddleware} from 'redux';
import thunk  from 'redux-thunk';

const store = createStore(Reducer, applyMiddleware(thunk))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <>
    <Provider store = {store}>
    <App />
    </Provider>
    </>
);