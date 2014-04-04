// JavaScript Document
// JavaScript Document
angapp.controller('dashboardcontroller',function($scope,$http,$location,DashboardService){
	$scope.usr=DashboardService.list();
	
	$scope.editdashboard=function(){
		//load the jax there using $http
		
	$location.path("/editdashboard");
		};
	
	
	
})



