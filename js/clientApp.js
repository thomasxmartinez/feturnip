import React from 'react'
import ReactDOM from 'react-dom'
import MyTitle from './MyTitle'

var div = React.DOM.div

var MyTitleFactory = React.createFactory(MyTitle)

var MyFirstComponent = React.createClass({
  render: function () {
    return (
      div(null,
        MyTitleFactory({title: 'props are lit af', color: 'peru'}), // read Only Props
        MyTitleFactory({title: 'lets get it', color: 'tomato'}),
        MyTitleFactory({title: 'next level', color: 'wheat'}),
        MyTitleFactory({title: 'turnip turnip', color: 'mediumaquamarine'}),
        MyTitleFactory({title: 'props are lit af', color: 'peru'})
      )
    )
  }
})

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'))
// front door, deos not export anything
