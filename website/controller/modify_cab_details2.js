// JavaScript Document
// JavaScript Document
// JavaScript Document
angapp.controller('modify_cab_details2controller',function($scope,$location,ModifyCabService){
		//angular part
	
		$scope.cab=ModifyCabService.list();
		$scope.onupdate=function(){
		//load the jax there using $http
		
	$location.path("/modify_cab_details3");
		};
	
	
	$scope.oncancel=function(){
		//load the jax there using $http
		if(confirm("Are you sure to delete the entire cab")==true){
	$location.path("/modify_cab_details");}
		};
	
	
					//Jquery
					///go green 
					
								
								
					
	
});


