// JavaScript Document
angapp.controller('feedbackcontroller',function($scope,$http,$location,DashboardService){
	$scope.usr=DashboardService.list();
	$scope.feedbackdata={};
	$scope.processform=function(){
	
$location.path("/surprisebox");

	
		
	
		};
	
	
	
})



