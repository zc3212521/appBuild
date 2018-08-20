import React from 'react'
import ReactDOM from 'react-dom'
import {AppContainer} from 'react-hot-loader' //热更替相关
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'mobx-react'
import App from './views/App.jsx'

import appState from './store/app.state'

console.log("process.env.NODE_ENV = ", process.env.NODE_ENV)

const root = document.getElementById('root')
const render = (Component, renderMethod = "render") => {
    ReactDOM[renderMethod](
        <AppContainer>
            <Provider store={store}>
                <BrowserRouter>
                    <Component/>
                </BrowserRouter>
            </Provider>
        </AppContainer>,
        root
    );
}

render(App)

if (module.hot) {
    module.hot.accept('./views/App.jsx', () => {
        const NextApp = require('./views/App.jsx').default
        render(NextApp, 'hydrate')
    })
}