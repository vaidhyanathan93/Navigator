// JavaScript Document

angapp.controller('cabmangementcontroller',function($scope,$location,DashboardService){
	$scope.usr=DashboardService.list();
	$scope.usr.theme="images/ctstheme/start3.jpg";
	$scope.add_new_cab=function(){
			
	$location.path("/add_new_cab");
		};
	$scope.modify_cab_details=function(){
			
	$location.path("/modify_cab_details");
		};
	
});
