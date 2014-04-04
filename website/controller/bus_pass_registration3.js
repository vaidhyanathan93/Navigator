// JavaScript Document
// JavaScript Document
angapp.controller('bus_pass_registration3',function($scope,$location,DashboardService,CabRegisService){
		//angular part
		alert("Sms and mail will be sent");
		$scope.usr=DashboardService.list();
		$scope.cab=CabRegisService.list();
		$scope.onsubmit=function(){
		//load the jax there using $http

	$location.path("/surprisebox");
		};
		
		
		});