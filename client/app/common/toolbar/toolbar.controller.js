class ToolbarController {
    constructor($mdSidenav) {
        this.name = 'toolbar';
        this.mdSidenav = $mdSidenav;
    }
    toggleSidenav() {
        this.mdSidenav('left').toggle();
    }
}

export default ToolbarController;
