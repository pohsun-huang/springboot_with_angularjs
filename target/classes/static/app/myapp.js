var app= angular.module("myApp", ["ngResource","spring-data-rest"])
.controller('AppController',function($scope, $http,SpringDataRestAdapter) {
		$scope.items = [];
 		var httpPromise = $http.get('/items')
        SpringDataRestAdapter.process(httpPromise).then(function (processedResponse) {
            $scope.items = processedResponse? processedResponse._embeddedItems : [];
        });

		$scope.addItem = function(description) {
			$http.post('/items',{
				description : description,
				checked : false
			}).success(function(item) {
				$scope.items.push(item);
			});
			$scope.newItem = "";
		};

		$scope.updateItem = function(item) {
			item._resources("self",{},{
			update : {
				method : "PUT"
			}}).update({description:'description'});
		};

		$scope.deleteItem = function(item) {
			item._resources("self").remove(function() {
        $scope.items.splice($scope.items.indexOf(item), 1);
      });
		};
});