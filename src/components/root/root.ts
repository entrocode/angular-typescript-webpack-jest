import {module} from 'angular';
import RootComponent from './root.component';

let RootModule: any = module('root', [])
.component('root', RootComponent);

export default RootModule;