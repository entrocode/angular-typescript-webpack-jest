var template: string = require('./root.html');
export class RootController {
    constructor() {
        'ngInject';
    }

    public sum(a: number, b: number) {
        return a + b;
    }

    public subtract(a: number, b: number) {
        return a - b;
    }
}

let RootComponent = {
    template,
    controller: RootController,
    controllerAs: "Root"
};



export default RootComponent;