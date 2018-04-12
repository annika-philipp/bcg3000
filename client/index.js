var React = require('react')
var ReactDOM = require('react-dom')

function helloTemplate (props) {
  return (
    <div>hello {props.name}</div>
  )
}

var data = { name: 'mix' }
var view = helloTemplate(data)

var placeToMount = document.getElementById('root')

ReactDOM.render(view, placeToMount)

//eventually this will be it!

// import React from 'react'
// import ReactDOM from 'react-dom'

// import App from './components/App'

// document.addEventListener('DOMContentLoaded', () => {
//   ReactDOM.render(
//     <App />,
//     document.getElementById('app')
//   )
// })

