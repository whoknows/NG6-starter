import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';

// import 'font-awesome/css/font-awesome.css';
import 'angular-material/angular-material.css';
import 'normalize.css';

angular.module('app', [
    uiRouter,
    ngMaterial,
    Common.name,
    Components.name
]).directive('app', AppComponent);
