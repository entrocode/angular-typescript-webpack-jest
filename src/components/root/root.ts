import {module} from 'angular';
import rootComponent from './root.component';

let rootModule = module('root', [])
.component('root', rootComponent);

export default rootModule;