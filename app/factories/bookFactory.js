'use strict';

app.factory('bookFactory', function($q, $http){
	let getBooks = () => {
		return $q((resolve, reject) => {
			$http.get('../data/guides.json')
			.then((itemObject) => {
				let bookCollection = itemObject.data.guides;
				console.log('bookCollection', bookCollection);
				resolve(bookCollection);
			})
			.catch((error) => {
				reject(error);
			});
		});
	};
	return {getBooks};
});