// JavaScript Document
angapp.controller('showpass',function($scope,$location,$routeParams,buspassservice){
		//angular part
		
					
		if(!$routeParams.buspassid){$scope.buspass=buspassservice.list()[0];}
		else{
			$scope.buspass=buspassservice.list()[$routeParams.buspassid];
			
			}
		$scope.onrenew=function(){
		//load the jax there using $http
	if(confirm("Renew for 1 more month")){
	$location.path("/bus_pass_registration3");}
		};
		$scope.oncancel=function(){
			if(confirm("Conifrm cance the bus pass")){
	$location.path("/bus_pass_canceled");}
			
			
			}
		
		
		});