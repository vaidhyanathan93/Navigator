// JavaScript Document
angapp.controller('modify_bus_details4controller',function($scope,$location,ModifyBusService){
		//angular part
		$scope.route = '';
	 $scope.totime = '';
	  $scope.fromtime = '';
	
		$scope.routes=ModifyBusService.listroutes();

			
			$scope.addroute=function(){
				 $scope.routes.push({'route':$scope.route,'totime':$scope.totime,'fromtime':$scope.fromtime});
    $scope.route = '';
	 $scope.totime = '';
	  $scope.fromtime = '';
	
	
				
				
				
				}
		
		
		
			$scope.finish=function(){
			
$location.path("/modify_bus_details2");
	
				
				
				
				}
		
		
		
		});