//jqry part



//angular part
angapp.controller('finleycontroller',function($scope,$location){
	
	$scope.bus_pass=function(){
			
	$location.path("/bus_pass");
		};
	$scope.cab_status=function(){
			
	$location.path("/cab_status");
		};
	$scope.dashboard=function(){
			
	$location.path("/dashboard");
		};
	
	
	
});
