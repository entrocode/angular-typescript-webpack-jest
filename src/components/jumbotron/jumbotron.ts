import {module} from 'angular';
import jumbotronComponent from './jumbotron.component';

let jumbotronModule: any = module('jumbotron', [])
.component('jumbotron', jumbotronComponent);

export default jumbotronModule;