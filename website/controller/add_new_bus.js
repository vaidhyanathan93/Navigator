// JavaScript Document
angapp.controller('add_new_bus',function($scope,$location,AddBusService){
		//angular part
	
		$scope.bus=AddBusService.list();
		$scope.onsubmit=function(){
		//load the jax there using $http
		
	$location.path("/add_new_bus2");
		};
	

	
	
					//Jquery
					///go green 
					
								
								
					
	
});


