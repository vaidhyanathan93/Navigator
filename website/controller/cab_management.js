// JavaScript Document

angapp.controller('cabmangementcontroller',function($scope,$location){
	
	$scope.add_new_cab=function(){
			
	$location.path("/add_new_cab");
		};
	$scope.modify_cab_details=function(){
			
	$location.path("/modify_cab_details");
		};
	
});
