var template: string = require('./navbar.html');
class NavbarController {
    constructor($state) {
        'ngInject';
    }
}

let navbarComponent = {
    template,
    controller: NavbarController,
    controllerAs: "Navbar"
};



export default navbarComponent;