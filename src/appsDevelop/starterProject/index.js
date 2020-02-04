import React , {Fragment} from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { ErrorBoundary } from '../../frameworks'
import {configureStore} from './stores/store'

import { Route, Switch } from 'react-router'
import { ConnectedRouter } from 'connected-react-router'

const [store , history]  = configureStore()

import routes from './routes/Routes'

// basic antd theme
import './styles/index.less'

ReactDOM.render(
    <ErrorBoundary>
        <Provider store={store}>
            <ConnectedRouter history={history}>
              {routes}
            </ConnectedRouter>
        </Provider>
    </ErrorBoundary>
, document.getElementById('app'))