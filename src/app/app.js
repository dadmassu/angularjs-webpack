import angular from 'angular';
import starter from './starter/starte.component';
import beginner from './beginner/beginner.component';
import angularMaterial from 'angular-material';
import simple from './starter/simple.component'

import 'angular-animate';
import 'angular-aria';
import 'angular-material';

import '../style/app.css';

let app = () => {
    return {
        template: require('./app.html'),
        controller: 'AppCtrl',
        controllerAs: 'app'
    }
};

class AppCtrl {
    constructor() {
        this.url = 'https://github.com/preboot/angular-webpack';
        this.what = "what is speaking at the moment"
        this.names = ['dawit', 'tuna', 'afom'];
    }
}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [angularMaterial])
    .directive('app', app)
    .component('simpleState', simple)
    .component('starter', starter)
    .component('beginner', beginner)
    .controller('AppCtrl', AppCtrl);

export default MODULE_NAME;