import template from './sidemenu.html';
import controller from './sidemenu.controller';
import './sidemenu.styl';

let sidemenuComponent = function ($mdSidenav) {
    return {
        restrict: 'E',
        scope: {},
        template,
        controller,
        controllerAs: 'vm',
        bindToController: true
    };
};

export default sidemenuComponent;
