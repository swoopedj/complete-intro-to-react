require('babel-register') // makes it so that require statements are transpiled through babel

const express = require('express')
const React = require('react')
const ReactDOMServer = require('react-dom/server')  // will render the entire app down as a long string, will ship down as html
const ReactRouter = require('react-router')
const ServerRouter = ReactRouter.ServerRouter
const _ = require('lodash')  // just for templating function
const fs = require('fs')
const PORT = 5050
const baseTemplate = fs.readFileSync('./index.html')  // will read from the file system (blocking)
const template = _.template(baseTemplate)  // creates templating function
const App = require('./js/App').default // need 'default' because it is written in es6 modules, and we are using commonjs here

const server = express()  // start a server

server.use('/public', express.static('./public')) // static file serving, if anyone requests anything from /public, use proper headers

server.use((req, res) => {  // for every request, use this particular function
  const context = ReactRouter.createServerRenderContext()  // the way that react-router v4 does its server-side rendering
  let body = ReactDOMServer.renderToString(
    React.createElement(ServerRouter, {location: req.url, context: context}, // plain ol javascript React
      React.createElement(App)
    )
  )

  res.write(template({body: body}))  // take body variable and stick it where we have the templating markup in index.html
  res.end()
})

console.log('Listening on port: ', PORT)
server.listen(PORT)

