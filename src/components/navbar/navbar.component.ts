var template: string = require('./navbar.html');
export class NavbarController {
    constructor() {
        'ngInject';
    }
}

let navbarComponent = {
    template,
    controller: NavbarController,
    controllerAs: "Navbar"
};



export default navbarComponent;