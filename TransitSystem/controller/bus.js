//jqry part



//angular part
angapp.controller('buscontroller',function($scope,$location,DashboardService){
	$scope.usr=DashboardService.list();
	$scope.usr.theme="images/ctstheme/start1.jpg";
	$scope.bus_pass_registration=function(){
			
	$location.path("/bus_pass_registration");
		};
	$scope.bus_pass=function(){
			
	$location.path("/bus_pass");
		};
	$scope.bus_schedule=function(){
			
	$location.path("/bus_schedule");
		};
	
	
	
});
