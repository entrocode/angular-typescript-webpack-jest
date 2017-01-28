import {module} from 'angular';
import navbarComponent from './navbar.component';

let navbarModule: any = module('navbar', [])
.component('navbar', navbarComponent);

export default navbarModule;