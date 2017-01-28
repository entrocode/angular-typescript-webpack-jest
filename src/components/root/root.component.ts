var template: string = require('./root.html');
class RootController {
    constructor($state) {
        'ngInject';
    }
}

let rootComponent = {
    template,
    controller: RootController,
    controllerAs: "Root"
};



export default rootComponent;