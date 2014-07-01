// JavaScript Document
// JavaScript Document
angapp.controller('busmangementcontroller',function($scope,$location,DashboardService){
	$scope.usr=DashboardService.list();
	$scope.usr.theme="images/ctstheme/start2.jpg";
	$scope.add_new_bus=function(){
			
	$location.path("/add_new_bus");
		};
	$scope.modify_bus_details=function(){
			
	$location.path("/modify_bus_details");
		};
	$scope.view_bus_details=function(){
			
	$location.path("/view_bus_details");
		};

	
	
});
