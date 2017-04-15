import React from 'react'
import {render} from 'react-dom'
import '../public/normalize.css'
import '../public/style.css'
import { BrowserRouter, Match } from 'react-router'
import Landing from './Landing'
import Search from './Search'

const App = React.createClass({
  render () {
    return (
      <BrowserRouter>
        <div className='app'>
          <Match exactly pattern='/' component={Landing} />
          <Match exactly pattern='/search' component={Search} />
        </div>
      </BrowserRouter>
    )
  }
})

render(<App />, document.getElementById('app'))
