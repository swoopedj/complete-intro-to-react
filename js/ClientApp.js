import React from 'react';
import ReactDOM from 'react-dom';
import MyTitle from './MyTitle.js';

var div = React.DOM.div;

var MyTitleFactory = React.createFactory(MyTitle);

// second argument to div can be an array or a comma separated list, does not matter
var MyFirstComponent = React.createClass({
  render: function () {
    return (
      div(null, [
        MyTitleFactory({ title: 'This is one title prop', color: 'peru' }),
        MyTitleFactory({ title: 'this might be a prop', color: 'mediumaquamarine' }),
        MyTitleFactory({ title: 'treading from parents', color: 'rebeccapurple' }),
        MyTitleFactory({ title: 'cannot modify props from parents', color: 'darkvioletred' })
      ]
      )
    );
  }
});

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'));
