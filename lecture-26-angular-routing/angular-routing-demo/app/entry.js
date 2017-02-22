'use strict';

require('./scss/main.scss');

const path = require('path');
const camelcase = require('camelcase');
const pascalcase = require('pascalcase');
const angular = require('angular');
const uiRouter = require('angular-ui-router');

// oh hey, here's a module dependency
angular.module('routesApp', [uiRouter]);

let context = require.context('./config/', true, /\.js$/);
context.keys().forEach(key => {
  angular.module('routesApp').config(context(key));
});

context = require.context('./view/', true, /\.js$/);
context.keys().forEach( key => {
  let name = pascalcase(path.basename(key, '.js'));
  angular.module('routesApp').controller(name, context(key));
});
