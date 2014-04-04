// JavaScript Document
angapp.controller('bus_pass_registration2',function($scope,$location,DashboardService,BusRegisService){
		//angular part
		$scope.usr=DashboardService.list();
		$scope.bus=BusRegisService.list();
		$scope.bus.city=$scope.usr.city;
		$scope.bus.moile=$scope.usr.phone;
	// need to copy from service		
	 $scope.buses=[
		    {sno:'1',busno:'learn angular', availableseat:'12',time:'12.00',cost:'1200'},
    		{sno:'1',busno:'learn angular', availableseat:'12',time:'12.00',cost:'1200'}
		
		];
		$scope.onclick=function(){
		//load the jax there using $http
		
	$location.path("/bus_pass_registration3");
		};
		
		
		});