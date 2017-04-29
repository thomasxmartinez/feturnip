import React from 'react'
// var react = require('react')

var div = React.DOM.div
var h1 = React.DOM.h1

var MyTitle = React.createClass({
  render: function () {
    return (
      div(null,
        h1({ style: { color: this.props.color, fontWeight: 'Bold' } }, this.props.title)
      )
    )
  }
})

export default MyTitle
