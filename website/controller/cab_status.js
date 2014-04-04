// JavaScript Document
// JavaScript Document
angapp.controller('showstatus',function($scope,$location,$routeParams,cabstatusservice){
		//angular part
		
					
		if(!$routeParams.cabstatusid){$scope.cabstatus=cabstatusservice.list()[0];}
		else{
			$scope.cabstatus=cabstatusservice.list()[$routeParams.cabstatusid];
			
			}
		$scope.onrenew=function(){
		//load the jax there using $http
	if(confirm("Renew for tomorrow")){
	$location.path("/cab_registration2");}
		};
		$scope.oncancel=function(){
			if(confirm("Conifrm cance the Cab")){
	$location.path("/cab_canceled");}
			
			
			}
		
		
		});