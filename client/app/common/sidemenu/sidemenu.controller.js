class SidemenuController {
    constructor() {
        this.name = 'sidemenu';
        this.menus = [{
            label: 'Accueil',
            href: '/home'
        }];
    }
    toggleSidenav() {
        $mdSidenav('left').toggle();
    }
}

export default SidemenuController;
