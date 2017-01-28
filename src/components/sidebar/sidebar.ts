import {module} from 'angular';
import sidebarComponent from './sidebar.component';

let sidebarModule: any = module('sidebar', [])
.component('sidebar', sidebarComponent);

export default sidebarModule;