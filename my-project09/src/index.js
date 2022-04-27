import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={store}><App /></Provider>);


// for synchronous,side-effect free code(such as data transformations), 
// prefer reducers, avoid put logic code in action creators or components.


// for async or code with side-effects,
// prefer action creators or components.never use reducers.