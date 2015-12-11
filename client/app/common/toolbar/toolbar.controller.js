class ToolbarController {
    constructor() {
        this.name = 'toolbar';
    }
    toggleSidenav() {
        $mdSidenav('left').toggle();
    }
}

export default ToolbarController;
