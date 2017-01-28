import * as angular from "angular";
import componentModules from "./components/components";
import "bootstrap";

// load our default (non specific) css
import "font-awesome/css/font-awesome.css";
import "bootstrap/dist/css/bootstrap.css";
import "./styles/main.scss";

angular.module("app", [
    componentModules.name
]);

angular.bootstrap(document, ['app']);