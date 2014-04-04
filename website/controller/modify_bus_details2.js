// JavaScript Document
// JavaScript Document
angapp.controller('modify_bus_details2controller',function($scope,$location,ModifyBusService){
		
		$scope.routes=ModifyBusService.listroutes();
$scope.bus=ModifyBusService.list();
			$scope.onupdate=function(){
		//load the jax there using $http
		$location.path("/modify_bus_details3");
	
		};
		$scope.oncancel=function(){
			if(confirm("Conifrm Delete the bus")){
	$location.path("/bus_canceled");}
			
			
			}
		
		
	

	
	
					//Jquery
					///go green 
					
								
								
					
	
});


