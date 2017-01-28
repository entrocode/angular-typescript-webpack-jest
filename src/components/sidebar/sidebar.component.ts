var template: string = require('./sidebar.html');
export class SidebarController {
    constructor() {
        'ngInject';
    }
}

let sidebarComponent = {
    template,
    controller: SidebarController,
    controllerAs: "Sidebar"
};



export default sidebarComponent;