//jqry part



//angular part
angapp.controller('cabcontroller',function($scope,$location){
	
	$scope.cab_registration=function(){
			
	$location.path("/cab_registration");
		};
	$scope.cab_status=function(){
			
	$location.path("/cab_status");
		};

	
	
	
});
