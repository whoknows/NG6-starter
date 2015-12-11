import angular from 'angular';
import User from './user/user';
import Sidemenu from './sidemenu/sidemenu';
import Toolbar from './toolbar/toolbar';

let commonModule = angular.module('app.common', [
    Sidemenu.name,
    User.name,
    Toolbar.name
]);

export default commonModule;
