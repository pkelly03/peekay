"use strict";var peekayApp=angular.module("peekayApp",[]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).otherwise({redirectTo:"/"})}]);"use strict",peekayApp.controller("MainCtrl",function(a){});