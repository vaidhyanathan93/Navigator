// JavaScript Document
angapp.controller('admincontroller',function($scope,$location){
	
	$scope.bus_management=function(){
			
	$location.path("/bus_management");
		};
	$scope.cab_management=function(){
			
	$location.path("/cab_management");
		};
	$scope.bus_usage_statistics=function(){
			
	$location.path("/bus_usage_statistics");
		};
	$scope.cab_usage_statistics=function(){
			
	$location.path("/cab_usage_statistics");
		};
	
	
	
});
