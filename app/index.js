import React from 'react'
import { useStrict } from 'mobx'
import { Provider } from 'mobx-react'
import stores from './stores'
import Router from './router'

useStrict(true)

const App = () => (
    <Provider {...stores}>
        <Router />
    </Provider>
)

export default App
