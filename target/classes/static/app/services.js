(function(angular) {
	var ItemFactory = function($http, $_resources) {
		return $_resources('/items/:id', {
			id : '@id'
		}, {
			update : {
				method : "PUT"
			},
			remove : {
				method : "DELETE"
			},
			query : {
				method : "GET",
				isArray : false
			}
		});
	};

	ItemFactory.$inject = [ '$http', '$_resources' ];
	angular.module("myApp.services").factory("Item", ItemFactory);
}(angular));
