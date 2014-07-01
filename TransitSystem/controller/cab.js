//jqry part



//angular part
angapp.controller('cabcontroller',function($scope,$location,DashboardService){
	$scope.usr=DashboardService.list();
	$scope.usr.theme="images/ctstheme/start1.jpg";
	$scope.cab_registration=function(){
			
	$location.path("/cab_registration");
		};
	$scope.cab_status=function(){
			
	$location.path("/cab_status");
		};

	
	
	
});
