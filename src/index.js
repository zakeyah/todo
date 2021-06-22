import React from 'react';
import ReactDOM from 'react-dom';
import SettingsProvider from './contaxt/todoContext'
import App from './app.js';

function Main () {
 
    return ( <SettingsProvider>
        <App />;
    </SettingsProvider>
 )
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);
