// JavaScript Document
angapp.controller('editdashboard',function($scope,$http,$location,DashboardService){
	$scope.usr1=DashboardService.list();
	$scope.usr=$scope.usr;
	
	$scope.cancel=function(){
	$location.path("/dashboard");
	};

	$scope.onsubmit=function(){
		//load your ajax there
		//load code after sucess
		$location.path("/dashboard");
		}	
	
	
})