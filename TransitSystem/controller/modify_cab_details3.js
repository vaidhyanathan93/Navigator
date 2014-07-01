// JavaScript Document
// JavaScript Document
// JavaScript Document
angapp.controller('modify_cab_details3controller',function($scope,$location,ModifyCabService,DashboardService){
		//angular part
	$scope.usr=DashboardService.list();
	$scope.usr.theme="images/ctstheme/start5.jpg";
	$scope.cab=ModifyCabService.list();
		$scope.save=function(){
		//load the jax there using $http
		    $.ajax({

		        url: "Handlers/modifycab.ashx",
		        data: { "cabno": $scope.ModifyCabService.cabno, "cabmodel": $scope.ModifyCabService.cabmodel, "capacity": $scope.ModifyCabService.capacity, "drivername": $scope.ModifyCabService.drivername, "drivermobile": $scope.ModifyCabService.drivermobile },
		        contentType: "application/json; charset=utf-8",
		        async: true,
		        dataType: "json",
		        success: function (msg) {

		            $scope.$apply(function () {

		                $location.path("/modify_cab_details");
		            });





		        },
		        error: function (xhr, ajaxOptions, thrownError) {
		            alert(xhr.status);
		            alert(thrownError);
		        }
		    }); // ajax closed

		};
	

	
	
					//Jquery
					///go green 
					
								
								
					
	
});


