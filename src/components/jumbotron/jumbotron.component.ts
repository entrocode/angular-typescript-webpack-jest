var template: string = require('./jumbotron.html');
export class JumbotronController {
    constructor() {
        'ngInject';
    }
}

let jumbotronComponent = {
    template,
    controller: JumbotronController,
    controllerAs: "Jumbotron"
};

export default jumbotronComponent;