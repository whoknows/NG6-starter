import angular from 'angular';
import uiRouter from 'angular-ui-router';
import sidemenuComponent from './sidemenu.component';

let sidemenuModule = angular.module('sidemenu', [
  uiRouter
])

.directive('sidemenu', sidemenuComponent);

export default sidemenuModule;
