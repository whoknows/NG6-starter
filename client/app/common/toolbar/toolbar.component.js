import template from './toolbar.html';
import controller from './toolbar.controller';
import './toolbar.styl';

controller.$inject = ['$mdSidenav'];

let toolbarComponent = function () {
    return {
        restrict: 'E',
        scope: {},
        template,
        controller,
        controllerAs: 'vm',
        bindToController: true
    };
};

export default toolbarComponent;
