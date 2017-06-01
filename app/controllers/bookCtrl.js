'use strict';

app.controller('bookCtrl', function($scope, bookFactory){
	bookFactory.getBooks()
	.then(function(bookCollection){
		$scope.books = bookCollection;
		console.log('books', $scope.books);
	});
});