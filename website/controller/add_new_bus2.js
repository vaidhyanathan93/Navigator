// JavaScript Document
// JavaScript Document
angapp.controller('add_new_bus2controller',function($scope,$location,AddBusService){
		//angular part
		$scope.route = '';
	 $scope.totime = '';
	  $scope.fromtime = '';
	
		$scope.routes=AddBusService.listroutes();

			
			$scope.addroute=function(){
				 $scope.routes.push({'route':$scope.route,'totime':$scope.totime,'fromtime':$scope.fromtime});
    $scope.route = '';
	 $scope.totime = '';
	  $scope.fromtime = '';
	
	
				
				
				
				}
		
		
		
			$scope.finish=function(){
			
$location.path("/add_new_bus3");
	
				
				
				
				}
		
		
		
		});