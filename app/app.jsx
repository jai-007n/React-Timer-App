var React = require('react');
var ReactDOM = require('react-dom');
var Main = require('Main');
var {Router,Route,IndexRoute,hashHistory} = require('react-router');


require('style!css!foundation-sites/dist/css/foundation.min.css');
require('style-loader!css-loader!foundation-sites/dist/css/foundation-float.min.css');
require('style!css!sass!applicationStyles')
$(document).foundation();

ReactDOM.render(<Router history={hashHistory}>
  <Route path='/' component={Main}>

  </Route>

</Router>, document.getElementById('app'));
