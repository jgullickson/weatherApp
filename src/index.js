import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { store } from './redux/reducers';

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, 
document.getElementById('root'));

serviceWorker.unregister();

function resizeBanner() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById('name').style = 'font-size: 1rem;'
        document.getElementById('logo').style = 'height: 0.75rem;'
    } else {
        document.getElementById('name').style = 'font-size: 2rem;'
        document.getElementById('logo').style = 'height: 1.5rem;'
    }
}
window.onscroll = () => resizeBanner();