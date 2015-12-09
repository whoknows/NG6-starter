import angular from 'angular';
import User from './user/user';
import Sidemenu from './sidemenu/sidemenu';

let commonModule = angular.module('app.common', [
    User.name,
    Sidemenu.name
]);

export default commonModule;
