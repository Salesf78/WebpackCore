// $ = require('jquery'); no need to require anymore because we use jquery as plugins in the webpack.config.js
// so we don't need to mention require jquery in every module we create
require('./lib');
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/site.css';
import ES6Lib from './es6code';
document.getElementById("fillthis").innerHTML = getText();
$('#fillthisjq').html('Hallo JQ');

let o = new ES6Lib();
$('#fillthises6code').html(o.getData());