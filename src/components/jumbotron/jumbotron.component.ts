var template: string = require('./jumbotron.html');
class JumbotronController {
    constructor($state) {
        'ngInject';
    }
}

let jumbotronComponent = {
    template,
    controller: JumbotronController,
    controllerAs: "Jumbotron"
};

export default jumbotronComponent;