// JavaScript Document
// JavaScript Document
angapp.controller('modify_bus_details3controller',function($scope,$location,ModifyBusService){
		//angular part
	
		$scope.bus=ModifyBusService.list();
		$scope.onsubmit=function(){
		//load the jax there using $http
		
	$location.path("/modify_bus_details4");
		};
	

	
	
					//Jquery
					///go green 
					
								
								
					
	
});


