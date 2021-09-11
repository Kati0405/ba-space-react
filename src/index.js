import React from 'react'
import ReactDOM from 'react-dom'
import App from './container/App'
import { BrowserRouter } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import articlesLikeReducer from './redux/articlesLikeReducer'

const store = createStore(articlesLikeReducer)

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
        ,
    </Provider>,
    document.getElementById('root')
)
