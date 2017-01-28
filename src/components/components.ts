import {module} from "angular";
import * as components from "./component.imports";

var deps = [];

for (let key of Object.keys(components)) {
    deps.push(components[key].name);
}

let componentsModule = module('something', deps);

export default componentsModule;