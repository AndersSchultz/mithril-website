//import _ from 'lodash';
import 'mini.css/dist/mini-default.css'
import './main.css'
const m = require("mithril")
const routes = require('./routes')

m.route(document.body, "/home", routes)