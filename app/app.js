'use strict';

var app = angular.module('book', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider.
	when('/', {
		templateUrl: 'partials/guide-list.html',
		controller: 'bookCtrl'
	}).
	otherwise('/');
});