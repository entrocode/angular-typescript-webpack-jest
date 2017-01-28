var template: string = require('./sidebar.html');
class SidebarController {
    constructor($state) {
        'ngInject';
    }
}

let sidebarComponent = {
    template,
    controller: SidebarController,
    controllerAs: "Sidebar"
};



export default sidebarComponent;