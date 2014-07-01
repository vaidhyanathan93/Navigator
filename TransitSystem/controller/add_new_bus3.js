// JavaScript Document
angapp.controller('add_new_bus3controller',function($scope,$location,AddBusService,DashboardService){
		$scope.usr=DashboardService.list();
	$scope.usr.theme="images/ctstheme/start5.jpg";
		$scope.routes=AddBusService.listroutes();

			
		$scope.bus=AddBusService.list();
		
	

	
	
					//Jquery
					///go green 
					
								
								
					
	
});


